var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3000, function(){
  console.log('Server is Running Man!')
});
app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});


io.on('connection', function(socket){
  console.log('A connection was made.');
})
