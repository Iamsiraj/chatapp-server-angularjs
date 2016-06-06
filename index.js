/**
 * Created by Siraj on 2016-06-03.
 */
 var app = require('express')();
var http  = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile('index.html');
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});

io.on('connection',function(socket){
  //  console.log('a user is connected');
    socket.on('chat message',function(msg){
      io.emit('chat message',msg);
    });
});
