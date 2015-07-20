/* 
 * Goal Keeper Proxy.js  - Dynamic proxy solution for debugging an testing HTTP traffic
 *
 * Copyright (c) 2015 Wouter-lucas van Boesschoten - wouterlucas.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), 
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * 
 * - The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * - THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
 *   FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
 *   WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/* jshint strict: true */
/* jshint node: true */
"use strict";

// standard node modules
var util = require('util');
var url = require('url');
var http = require('http');
var Contextify = require('contextify');

// packages
var redis = require('redis').createClient();

// GoalKeeper modules
var config = require('./config.js').config;

var activeClients = [];

/* Redis hash explanation
 *
 * GoalKeeper uses REDIS to store information for: regular expressions to match the request and the response. Once a match
 * once a match is found it will execute stored code (also in REDIS) to create a response
 *
 * Hash definition:
 * Key : <IP of the Box>
 * Fields:
 *     requestRegExpList: [{ regExp : 'abc', regExpMap : nameOfProgram } , {..}]
 *     responseRegExpList : [{ regExp : 'abc', regExpMap : nameOfProgram }, {...}],
 *     nameOfProgram: 'code'
 */
http.createServer(function(clientRequest, clientResponse) {
    var clientAddr = clientRequest.connection.remoteAddress;

    console.log("<-- Client request: " + clientAddr + ': ' + clientRequest.method + ' ' + clientRequest.url);

    if (activeClients.indexOf( clientAddr ) === -1){
        redis.lpush('activeClients', clientAddr);
        activeClients.splice(0, 15, clientAddr);
    }

    clientRequest.body = []; // add the body object to the client request incomming message --> https://nodejs.org/api/http.html#http_http_incomingmessage

    clientRequest.on('data', function(clientchunk) {
        clientRequest.body += clientchunk;
    });

    function _respondToClient(serverResponse){
        console.log('--> Response to client: ' + serverResponse.statusCode);

        // add to cross check if someone forgets to stringify the response body object (like myself)
        if (typeof(serverResponse.body) === 'object'){
            serverResponse.body = JSON.stringify(serverResponse.body);
        }

        // we have no headers, lets set a few
        if (serverResponse.headers === undefined){
            serverResponse.headers = {
                'content-length' : 0,
                'Server': 'GoalKeeper  NodeJS v' + process.versions.node + ' Chrome V8 v' + process.versions.v8, 
                'Connection': 'close'           
            };
        }

        if (serverResponse.body.length > 0){
            serverResponse.headers['content-length'] = serverResponse.body.length;
        }

        clientResponse.writeHead(serverResponse.statusCode, serverResponse.headers);

        if (serverResponse.body.length > 0){
            clientResponse.write(serverResponse.body);
        }

        clientResponse.end();
        console.log('\n');  
    }

    /** Here we go, inspect it, proxy or directly respond to the request
     * If the request has a regexp that can be matched, magic happens
     */
    clientRequest.on('end', function() {
        if (clientRequest.body.length > 0) console.log('<-- Request body: ' + clientRequest.body);
        
        // make sure we clear the Accept header, to avoid getting GZIPped responses. I don't want to deal with gzip at this stage.
        if (clientRequest.headers['accept'] !== undefined) {
            delete clientRequest.headers['accept'];
        }

        // log it
        redis.lpush('LOG|' + clientAddr, createLog(clientAddr, 'ORGREQ', { method : clientRequest.method, url : clientRequest.url, body: clientRequest.body }) );

        redis.exists(clientAddr, function(err, keyExists){
            if (err) { 
                var resp = {
                    statusCode : 500,
                    body : 'REDIS error'
                };
                _respondToClient(resp);
            }

            if (keyExists === 1) {
                checkAndRun(clientAddr, clientRequest, undefined, 'request', function(modifiedRequest, customResponse){
                    if (customResponse !== undefined){
                        // we have a response, lets response without making a proxy request
                        redis.lpush('LOG|' + clientAddr, createLog(clientAddr, 'DIRRES', { statusCode : customResponse.statusCode, body: customResponse.body }) );

                        _respondToClient(customResponse);

                    } else {
                        // lets forward after modifing the clientRequest
                        redis.lpush('LOG|' + clientAddr, createLog(clientAddr, 'MODREQ', { method : modifiedRequest.method, url : modifiedRequest.url, body: modifiedRequest.body }) );

                        proxyRequest(modifiedRequest, function(serverResponse){
                            // we got a response, lets see if we need to modify that
                            redis.lpush('LOG|' + clientAddr, createLog(clientAddr, 'ORGRES', { statusCode : serverResponse.statusCode, body: serverResponse.body }) );
                            
                            checkAndRun(clientAddr, modifiedRequest, serverResponse, 'response', function(modifiedRequest, modifiedResponse){
                                // check if the response is actually modified, if so log it
                                if (serverResponse != modifiedResponse){
                                    redis.lpush('LOG|' + clientAddr, createLog(clientAddr, 'MODRES', { statusCode : modifiedResponse.statusCode, body: modifiedResponse.body }) );
                                }

                                _respondToClient(modifiedResponse);
                            });
                        });                    
                    }
                });

            } else {
                //it's not mapped, lets just proxy it without touching the response
                console.log('<-> Proxying request without modifying the response');
                proxyRequest(clientRequest, function(serverResponse){
                    // log it
                    redis.lpush('LOG|' + clientAddr, createLog(clientAddr, 'ORGRES', { statusCode : serverResponse.statusCode, body: serverResponse.body }) );

                    _respondToClient(serverResponse);
                });

            }

        });
    });   
}).listen(config.goalKeeperProxyPort, config.goalKeeperProxyInterface);


/* CheckAndRun - validate against regular expressions stored in REDIS
 * 
 * - If a regular expression tests positive on the body of the request or response, executeCode will be called
 * - The inspectToggle can have 'request' or 'response' values to indicate what to inspect
 *
 * This function fetches data from REDIS: Key (IP of requestor) and the regular expression list + the code to be executed on postive hit
 */
function checkAndRun(clientIp, request, response, inspectToggle, callback){
    if (clientIp === undefined){
        console.error('!!! Client IP is undefined, dont know what to do from here. Game over');
        callback(request, response);
    }

    var redisKey = 'requestRegExpList';

    // check if we are validating the request or the response by presence of the response object
    if (inspectToggle === 'response'){
        redisKey = 'responseRegExpList';
    }

    function validateRegExpList(regularExpressionList){
        if (regularExpressionList === undefined  || regularExpressionList.length === 0){
            console.log('--- Regular expression list empty or not present, returning');
            callback(request, response);
        }

        // see if one of the regular expressions has a positive hit
        for (var i=0; i<regularExpressionList.length; i++){
            var regExp=new RegExp(regularExpressionList[i].regExp);
            var testResult = false;


            //validate the request if the response hasn't been received yet
            if (inspectToggle === 'request'){
                testResult = regExp.test(request.body);
            } else {
                testResult = regExp.test(response.body);
            }

            if (testResult === true){
                console.log('+++ Regular expression tested postive! Running code');

                //run program & callback
                redis.hget( clientIp, regularExpressionList[i].regExpMap, function(err, code){
                    if (err) { 
                        console.error('!!! Error when getting the hash from REDIS ' + err); 
                        callback(request, response); 
                    } else {
                        executeCode(request, response, code, function(request, response){
                            callback(request, response);
                        });                        
                    }
                });
                break;
            }

            // we shouldn't be here --> fail safe for if nothing validates
            if (i==regularExpressionList.length-1){
                callback(request, response);
            }
        }
    }

    console.log('--- Getting key from redis for ' + clientIp);
    redis.hget( clientIp, redisKey, function(err, obj){
        if (err) { 
            console.error('!!! Error when getting the hash from REDIS ' + err); 
            callback(request, response); 
        } else {
            console.log('--- Got regularExpressionList from REDIS, starting validation');
            validateRegExpList(JSON.parse(obj));
        }
    });
}

/**
 * executeCode - Executes 'custom' javascript code in a VM and fetches the modified output
 */
function executeCode(request, response, code, callback){
    var checkIntervalTimerInMs = 1000; // checking every second if you are done, assuming that's enough
    var timeOutTimerInMs = 60 * 1000; // seconds and you're out

    //create sandbox
    var sandbox = Contextify({
        console : console,
        request : request,
        response : response,
        ended : false,
        t : undefined,
        done : function(){ cleanUp(); }
    });

    sandbox.t = setTimeout(function(){
        sandbox.dispose();
        console.error('!!! Program timed out in sandbox, returning orignal values');
        callback(request, response);

    }, timeOutTimerInMs);    

    //run it
    sandbox.run(code);

    function cleanUp(){
        var res = sandbox.response;
        var req = sandbox.request;

        sandbox.dispose();
        clearTimeout(sandbox.t);
        callback(req, res);
    }

    function checkIfDone(){
        if (sandbox.ended === false){
            setTimeout(checkIfDone, checkIntervalTimerInMs);         
        } else {
            cleanUp();
        }
    }

    // are we there yet?
    checkIfDone();
}

/**
 * proxy request forwards the request to the server and wait for it to respond
 */
function proxyRequest(clientRequest, callback){
    var responseObject = {
        statusCode : 0,
        headers : {},
        body : []
    };

    //Forward the request to the Server and set the options to the http.request handler
    //DO NOT USE the Node JS HTTP Pooling Agent. You will run into socket errors (NOBUFS).
    var options = {
        host: config.destinationIp,
        port: config.destinationPort,
        path: clientRequest.url,
        method: clientRequest.method,
        headers: clientRequest.headers,
        agent: false
    };

    var proxyrequest = http.request(options, function(res) {
        console.log('<-> Server Response: ' + res.connection.remoteAddress + ': HTTP/' + res.httpVersion + ' ' + res.statusCode);
        responseObject.statusCode = res.statusCode;
        responseObject.headers = res.headers;
    });

    proxyrequest.on('error', function(e) {
        console.log('!!! Error when sending request to Server: ' + e.message);

        responseObject.statusCode = 500;
        responseObject.headers = {
            'Server': 'Node v' + process.versions.node + ' Chrome V8 v' + process.versions.v8, 
            'Connection': 'close'
        };        
        responseObject.body = "Error: " + e.message;
        callback(responseObject);
    });

    proxyrequest.on('response', function (resp) {
        resp.on('data', function (chunk) {
            responseObject.body += chunk;
        });
        
        resp.on('end', function () {    
            callback(responseObject);
        });
    });

    if (clientRequest.body.length > 0) {
        console.log('<-> Writing body to Server');
        proxyrequest.write(clientRequest.body);
    }

    proxyrequest.end();
}

/** 
 * Utility function to create a logging object to be added to REDIS
 */
function createLog(id, type, logObject){
    var log = {
        'id' : id,
        'type' : type,
        'timestamp' : new Date().toISOString()
    };

    if (type == 'ORGREQ' || type == 'MODREQ'){
        log.method = logObject.method;
        log.url = logObject.url;
    } else if (type == 'DIRRES' || type == 'ORGRES' || type == 'MODRES'){
        log.statusCode = logObject.statusCode;
    }

    log.body = logObject.body;

    return JSON.stringify(log);
}

console.log('Started GoalKeeper Proxy service on port: ' + config.goalKeeperProxyPort);
console.log('GoalKeeper is proxying towards ' + config.destinationIp + ':' + config.destinationPort);