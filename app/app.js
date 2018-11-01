const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(__dirname)); // use this to server css, js files

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

io.on('connection', (socket) => {
  // console.log(socket);
  console.log('user connected');

  socket.on('disconnect', () =>{
    console.log('user disconnected');
  });
});


http.listen(3000, () => {
  console.log('listening on *:3000');
});