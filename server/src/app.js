const express = require('express');
const morgan = require('morgan');
const cors =  require('cors');
const {Server} =  require ('socket.io');
const http =  require('http');
const handleMyData = require('./routes/handlers/handleMyData');
const handleUsers = require('./routes/handlers/handleUsers');
const handleExit = require('./routes/handlers/handleExit');
const userListHandler =  require('./routes/handlers/userListHandler');
const handleChat = require('./routes/handlers/handleChat');
const getMessage = require('./routes/handlers/getMessage');
const server =  express();
const routes = require('./routes/index.js');
const updateInfo = require('./routes/handlers/updateInfo');
const updatePic = require('./routes/handlers/updatePic');
const updateBio = require('./routes/handlers/updateBio');
const getUsers = require('./routes/handlers/getUsers');
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
   
      //VERIFICO Y DEVUELVO USUARIOS
      const users = await handleUsers(user);
      const data = await handleMyData(user);
      const message= await getMessage();


       //RESPUESTAS              
        socket.emit('myData',data);   
        socket.emit('chat',message);  
      socket.broadcast.emit('join',users)
     
   });

  //ACTUALIZAR INFO
   socket.on("updateInfo", async({email, nombre}) => {

    const info = await updateInfo(email, nombre)
    socket.emit('updateInfo', info)
    const allUsers = await getUsers()
    socket.broadcast.emit('join', allUsers)
   })

   socket.on("updatePic", async({email, pic}) => {

    const info = await updatePic(email, pic)
    socket.emit('updatePic', info)
    const allUsers = await getUsers()
    socket.broadcast.emit('join', allUsers)
   })

   socket.on("updateBio", async({email, bio}) => {

    const info = await updateBio(email, bio)
    socket.emit('updateBio', info)

   })
   

    // ESCUCHO LA RUTA EXIT
    socket.on('exit',async (user)=>{
       const create = await handleExit(user);
       const users = await userListHandler();
       socket.broadcast.emit('join',users)
      
    });

   


    //ESCUCHO LA RUTA CHAT
    socket.on('chat',async (msj)=>{
      
      const messages= await handleChat(msj);
      const {user} = msj;
    
    
      
      socket.broadcast.emit(user,messages)
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

