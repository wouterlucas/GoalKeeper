# Goal Keeper

GoalKeeper is a proxy. Just like any proxy it forwards requests and responses between client and server.

However GoalKeeper allows you to setup 'rules', with these rules there are two things.

Note: This is mainly meant for testing/development environments. Running javascript code on the fly when inspecting requests and responses is not considered 'internet safe'. It is not recommended to use this Proxy in production for live environments.

* Regular Expression used to inspect the body (sorry doesn't work on GET requests)

* Once a RegEx has a hit you can use JavaScript to manipulate the request and responses

Add the JavaScript code to be executed when the regular expression matches. 

Note: There are two objects provided to the function: request and response. 

The following properties can be present

Request

- method -> The method of the request (e.g. GET, POST, PUT, etc)

- url -> The URL of the request (e.g. /a/b)

- body -> The body of the request


response

- statusCode -> This will be the server response status code (e.g. 200 or 404)

- body -> The body of the response

In case of a request, if you fill in the response details GoalKeeper will not proxy the request but immediately respond to the client. 

You will need to set response.statusCode and optionally a body. If you leave response undefined on the request, GoalKeeper will proxy the request to the server. 


Please call done(); at the end of your program to finish your changes and handle/proxy the request/response. 

## Prerequisites

GoalKeeper uses REDIS for key/value storage, it requires a redis server to connect to.

## Installation

1. npm install to install the required npm packages
2. make sure Redis is running
3. Configure your settings in config.js
4. node goalKeeper
5. Open browser to http://<ip of goalkeeper>:8081 for the administration webpage

## Todo

* Lots of testing, this project is in initial development stages

* Handle errors, there are 2 sub processes of Goal Keeper. If one crashes, we should handle it gracefully (we just ignore it now)

* Tons of UI options can be added: statistics, editing of rules/programs, better code editor