/* 
 * Goal Keeper clients.js  - Back End APIs for client management
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

var redis = require('redis').createClient();

exports.getAllActiveClients = function(req, res){
    redis.llen('activeClients', function(err, length){
        redis.lrange('activeClients',0, length-1, function(err, activeClients){
            if (err) res.status(500).end();

            res.status(200).json(activeClients);
        });
    });
};

exports.getAllRegisteredClients = function(req, res){
    redis.llen('registeredClients', function(err, length){
        redis.lrange('registeredClients', 0, length-1, function(err, registeredClients){
            if (err) res.status(500).end();

            res.status(200).json(registeredClients);
        });
    });   
};

exports.getInfoByClientId = function(req, res){
    var clientId = req.params.clientId;
    if (!clientId) res.status(404).end();

    redis.hgetall(clientId, function(err, clientInfo){
        if (err) res.status(500).end();

        res.status(200).json(clientInfo);
    });
};

exports.registerNewClientAndAddRules = function(req, res){
    var clientId = req.params.clientId;
    var requestRegExpList;
    var responseRegExpList;
    var clientInfo = req.body;


    if (clientInfo){
        requestRegExpList = clientInfo.requestRegExpList;
        responseRegExpList = clientInfo.responseRegExpList;        
    } else {
        res.status(400).end();
    }


    /*
     *     requestRegExpList: [{ regExp : 'abc', regExpMap : nameOfProgram } , {..}]
     *     responseRegExpList : [{ regExp : 'abc', regExpMap : nameOfProgram }, {...}],
     *     nameOfProgram: 'code'
     */

    if (!clientId && (!requestRegExpList || !responseRegExpList)) res.status(400).end();

    redis.hset(clientId, 'requestRegExpList', JSON.stringify(requestRegExpList));
    redis.hset(clientId, 'responseRegExpList', JSON.stringify(responseRegExpList));

    console.log('Succesfully added new rules to clientid: ' + clientId);

    //check and add to registered clients if needed
    redis.llen('registeredClients', function(err, length){
        redis.lrange('registeredClients',0, length-1, function(err, registeredClients){
            if (registeredClients.indexOf( clientId ) === -1){
                redis.lpush('registeredClients', clientId);
            }
        });
    });

    res.status(200).end();

};

exports.deleteClientByClientId = function(req, res){
    var clientId = req.params.clientId;
    if (!clientId) res.status(404).end();

    redis.del(clientId);
    res.status(200).end();
};

exports.addProgramToClient = function(req, res){
    var clientId = req.params.clientId;
    var programName = req.params.programName;
    var code = [];

    if (!clientId || !programName) res.status(400).end();

    function addProgramToRedis(code){
        redis.hset(clientId, programName, code, function(err, resp){
            if (err) { 
                res.status(500).end();
            } else{
                res.status(200).end();
            }
        });
    }

    req.on('data', function(clientchunk) {
        code += clientchunk;
    });

    req.on('end', function(){
        console.log('=== addProgramToClient Got body: ' + code);
        addProgramToRedis(code);
    });
};

exports.getProgram = function(req, res){
    var clientId = req.params.clientId;
    var programName = req.params.programName;

    if (!clientId || !programName) res.status(400).end();

    redis.hget(clientId, programName, function(err, code){
        if (err) res.status(404).send();

        res.status(200).send(code);
    });
};

exports.deleteProgramFromClient = function(req, res){
    var clientId = req.params.clientId;
    var programName = req.params.programName;

    if (!clientId || !programName) res.status(400).end();

    redis.hdel(clientId, programName, function(err, resp){
        if (err) res.status(404).send();

        res.status(200).end();
    });
};
