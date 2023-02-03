const express = require('express');
const morgan = require('morgan');
const cors =  require('cors');
const http =  require('http');
const initialSocket= require('./socket.js');
const server =  express();
const routes = require('./routes/index.js');
const updateInfo = require('./routes/handlers/updateInfo');
const updatePic = require('./routes/handlers/updatePic');
const updateBio = require('./routes/handlers/updateBio');
const getUsers = require('./routes/handlers/getUsers');
const httpServer = http.createServer(server)
const  multer =require('multer')
const cloudinary = require("cloudinary").v2;

//INICIALIZO SOCKET
initialSocket(httpServer);
cloudinary.config({
    //configuramos cloudinary
    cloud_name: "daekdf1sh",
    api_key: "838392469389272",
    api_secret: "hInStLPoBP5LBqsfw58NSlb8Y-Y",
  }); //
  var upload = multer({ dest: 'uploads/' });///midleware auxiliar para recibir archivos 

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

  server.post('/audioconverter',upload.single('file'),async(req,res)=>{

    const result=await cloudinary.uploader.upload(req.file.path,{
        resource_type: "video",
        folder:"audiochat",
        public_id: "private_audio/audioschatapp75281abc",
        type: "private",
        format:'mp3'
        
    },)
    res.status(200).send(result.secure_url)

})
// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = httpServer;

