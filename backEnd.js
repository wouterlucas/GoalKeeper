/* 
 * Goal Keeper backEnd.js  - Back End management APIs for goalKeeper proxy
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

// packages
var redis = require('redis').createClient();
var express = require('express');
var bodyParser = require('body-parser');
var vm = require('vm');

// Redis
var app = express();

// GoalKeeper modules
var config = require('./config.js').config;
var clients = require('./backEnd_clients.js');

// internal settings
var maxActiveClientsHistory = 50; //in amount of clients before we trim it

// Log our requests
app.use(function (req, res, next) {
  console.log('<== Back End request: ' + req.connection.remoteAddress + ': ' + req.method + ' ' + req.url);
  next();
})

// Express settings
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json()); // for parsing application/json

// Client Management
app.get('/activeClients', clients.getAllActiveClients);
app.get('/registeredClients', clients.getAllRegisteredClients);

app.get('/client/:clientId', clients.getInfoByClientId);
app.post('/client/:clientId', clients.registerNewClientAndAddRules);
app.put('/client/:clientId', clients.registerNewClientAndAddRules);
app.delete('/client/:clientId', clients.deleteClientByClientId);

// program related
app.get('/client/:clientId/getProgram/:programName', clients.getProgram);
app.post('/client/:clientId/addProgram/:programName', clients.addProgramToClient);
app.put('/client/:clientId/addProgram/:programName', clients.addProgramToClient);
app.delete('/client/:clientId/removeProgram/:programName', clients.deleteProgramFromClient);

// Logs
app.get('/logs/:clientId/:start/:end', getLogsByClientId);

// Code validation
app.get('/code', validateCode);


var server = app.listen((process.env.PORT || config.goalKeeperBePort), function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Started GoalKeeper Back end API on port: ' + port);
});



// our maintenance loop
function maintenanceLoop() {
    redis.llen('activeClients', function(err, length){
        if (length > maxActiveClientsHistory){
            console.log('active Clients List: ' + length + ' trimming it to ' + maxActiveClientsHistory + ' entries');
            redis.ltrim('activeClients',0, maxActiveClientsHistory-1);
        }
    });   

    // add registered clients cleanup function
}

// start our maintenanceLoop
var timer = setInterval(maintenanceLoop, 300 * 1000); // every 5 min

function getLogsByClientId(req, res){
    var clientId = req.params.clientId;
    var start = req.params.start ? req.params.start : 0;
    var end = req.params.end ? req.params.end : 100;
    var redisKey = 'LOG|' + clientId;

    if (!clientId) res.status(404).end();

    redis.llen(redisKey, function(err, length){
        if (length < end) end=length;

        redis.lrange(redisKey, start, end, function(err, log){
            if (err) res.status(500).end();

            res.status(200).json(log).end();
        });
    });
}

function validateCode(req, res){
    /** .. */
}

