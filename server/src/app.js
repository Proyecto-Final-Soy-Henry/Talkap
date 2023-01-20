const express = require('express');
const morgan = require('morgan');
const cors =  require('cors');
const {Server} =  require ('socket.io');
const http =  require('http');
const  handleUsers =  require('./routes/handlers/handleUsers.js');
const handleChat = require('./routes/handlers/handleChat.js');
const server =  express();
const httpServer = http.createServer(server)
const io =  new Server(httpServer,{
  cors:{
    origin:"*"
  }
});

//Pongo a escuchar io
io.on("connection", (socket) => {
  console.log(`Connected: ${socket.id}`);

  socket.on('disconnect', () =>
     console.log(`Disconnected: ${socket.id}`));

     // RUTAS
       //JOIN
     socket.on('join', async (user) => {
      //recibo el usuario 
      console.log(`Socket id: ${socket.id} Usuario: ${user.name}`);
      //funcion que verifica y crea usuario.
      const users = await handleUsers(user);
       
      socket.broadcast.emit('join',users)
     
   });


    //CHAT
    socket.on('chat',async (msj)=>{
      
      const messages= await handleChat(msj);
      socket.broadcast.emit('chat',messages);

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

  
 

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = httpServer;

