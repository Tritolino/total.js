var framework = require('total.js');
var http = require('http');

var port = 8004;
var debug = true;

framework.on('load', function() {
	framework.injectDefinition('http://www.totaljs.com/inject-definition.js');
});

framework.run(http, debug, port);