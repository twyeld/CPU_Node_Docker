var express = require('express');
var app = express();

var os = require('os-utils');

app.get('/', function(req, res){
  res.sendFile(__dirname +  '/index.html'); //'/iframes2.html');
});

//app.use(express.static('./public'));
//app.use(express.static('/'));
app.use(express.static('js'));

var socket = require('socket.io')

var server = app.listen(3000, function(){
	console.log('localhost:3000');
});

let io = socket(server)
//Whenever browser connects this gets executed
io.on('connection', function(socket) {
	console.log('Browser connected');

	setInterval(function(){
		for (var i=0; i<10; ++i){
			os.cpuUsage(function(v){
				socket.send(v);
			});
		}
	}, 300);

	//Whenever browser disconnects this piece of code executed
	socket.on('disconnect', function () {
	   console.log('Browser disconnected');
	});
 });
