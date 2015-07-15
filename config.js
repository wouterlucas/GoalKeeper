/* 
 * goalkeeper - Configuration file
 *
 * Copyright (c) 2015 Wouter-lucas van Boesschoten - wouterlucas.com
 */

exports.config = {
    goalKeeperProxyInterface : '0.0.0.0',			// Interface on where Goal Keeper Proxy will bind for requests
    goalKeeperProxyPort : 8080,             		// Port on where the Goal Keeper will listen for incoming requests
    goalKeeperBePort : 8081,              			// Port on where the Goal Keeper will serve the BE HTML and BE API for management      
    destinationIp : '127.0.0.1',     				// Destination IP (or hostname) on where goalkeeper will forward the requests
    destinationPort : 80      	            		// Destination Port on where goalkeeper will forward the requests
};

