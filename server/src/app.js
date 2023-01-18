const express = require('express');
const morgan = require('morgan');
const routes =  require('./routes/index.js');
const cors =  require('cors');
const {Server} =  require ('socket.io');
const http =  require('http');

const server =  express();
const httpServer = http.createServer(server)
const io =  new Server(httpServer,{
  cors:{
    origin:"*"
  }
});

//Pongo a escuchar io
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
// escuchando el mensaje enviado desdel el cliente
 socket.on('message',(value)=>{
  //RENVIO EL MENSAJE a todos los clientes
  socket.broadcast.emit('message',{
    message:value,
    user:socket.id,
  });
 });



});


server.name = 'API';

server.use(express.json());
server.use(morgan('dev'));
server.use(cors());
server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
  });

  
  server.use('/', routes);

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = httpServer;

