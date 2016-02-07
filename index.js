var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  io.emit('userConnection');

  socket.on('chatMessage', function(msg){
    io.emit('chatMessage', {from: msg.nickname, message: msg.message});
  })

});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
