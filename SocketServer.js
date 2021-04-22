const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io')(server);

io.sockets.on('connection', (socket) => {
	socket.join("videos");
	socket.on('streaming', (data) => {
		//console.log(data);
		io.sockets.in("videos").emit('streaming', data);
	});
});

server.listen(746, function () {
    console.log('서버 실행중...');
});