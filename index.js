// //Ref : https://stackoverflow.com/questions/16333790/node-js-quick-file-server-static-files-over-http
var express = require('express');
var server = express();
server.use('/', express.static('.'));
server.listen(8080);