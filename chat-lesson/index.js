// declare variable
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// check if the server running
server.listen(3000, function(){
  console.log('Server is Running Man!')
});

// get the response
app.get('/', function(request, response){
  response.sendFile(__dirname + '/index.html');
});

// if connection, tell me
io.on('connection', function(socket){
  console.log('A connection was made.');
})
