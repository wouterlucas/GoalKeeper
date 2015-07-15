# Goal Keeper

GoalKeeper is a proxy. Just like any proxy it forwards requests and responses between client and server.
However GoalKeeper allows you to setup 'rules' which will be inspected and execute once a request or response matches.

GoalKeeper comes with a Back End API and Backbone.js/jQuery/Bootstrap based administration webpage to easily setup rules and view logs.

For each rule:

* Regular Expression used to inspect the body (sorry doesn't work on GET requests)

* Once a RegEx has a hit you can use JavaScript to manipulate the request and responses

The following properties can be present:

Request

- method -> The method of the request (e.g. GET, POST, PUT, etc)

- url -> The URL of the request (e.g. /a/b)

- body -> The body of the request

Response

- statusCode -> This will be the server response status code (e.g. 200 or 404)

- body -> The body of the response

In case of a request, if you fill in the response details GoalKeeper will not proxy the request but immediately respond to the client. 

You will need to set response.statusCode and optionally a body. If you leave response undefined on the request, GoalKeeper will proxy the request to the server. 

Please call done(); at the end of your program to finish your changes and handle/proxy the request/response. 

For example:
```javascript
var response = {
	statusCode : 503,
	body : 'Hello World!'
};

done();
```

Will immediately return a 503 on the response with the Body: Hello World!

## Prerequisites

GoalKeeper uses REDIS for key/value storage, it requires a redis server to connect to.

## Installation

1. `npm install` to install the required npm packages
2. make sure Redis is running
3. Configure your settings in `config.js`
4. `node goalKeeper`
5. Open browser to `http://<ip of goalkeeper>:8081` for the administration webpage

## Todo

* Lots of testing, this project is in initial development stages

* Handle errors, there are 2 sub processes of Goal Keeper. If one crashes, we should handle it gracefully (we just ignore it now)

* Tons of UI options can be added: statistics, editing of rules/programs, better code editor