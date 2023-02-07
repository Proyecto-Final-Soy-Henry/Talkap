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
const sendMail = require('./routes/handlers/sendMail.js')
const cloudinary = require("cloudinary").v2;
const {
  Donadores,
  getUsertodonate,
  getlastDonates,
  getClosestObject,
} = require("./services.js");

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

server.post("/donador",async(req,res)=>{
    
  const {user}=req.body//usuario nos llega por body
  const lastdonates=await getlastDonates()///obtenemos ultimos donadores y sus fechas de donaciones
  const ultimodonador =lastdonates[0].email//nos quedamos con el ultimo
  const currentTime = new Date();//obtenemos nuestro hora actual
  const closestObject = getClosestObject(lastdonates, currentTime);//invocamos la funcion que compara nuestro hora actual en base a la ultima donacion
  const usuarioantessindonar=await getUsertodonate(user)//nos fijamos si el usuario nunca dono
  const listoparadonar=await usuarioantessindonar?true:false//si no dono esta listo para donar 
  const usuariodono = await Donadores()//obtenemos lista de email todos los donadores
  const usuariodespuesdedonar=await usuariodono.includes(user)//verificamos que el usuario no este en esa lista , asi esta listo para donar
  const confirmacion= listoparadonar?usuariodespuesdedonar===listoparadonar:false///bueno basicamente compara el estado antes de que el usuario done y despues de que dona (para evitar que el mensaje de gracias aparezca siempre)
  const mensajedeconfirmacion=confirmacion?'gracias por donar':"usuario sin donaciones o sin donaciones recientes"
  
  if(ultimodonador==user&&closestObject?.email.includes(user)){///comparamos de tal manera que responda al donador 
      res.send('gracias por donar')
      sendMail(user,'donate');
  }else{  
      res.send(mensajedeconfirmacion)//este no es nesesario devolver pero sirvio como guia 
  }

})///conclusion todo el codigo y funciones verifican el historial de donacion de un usuario espesifico ,el usuario al momento
//de donar es agregado a una lista se le asigna una hora, al volver al home, se llama a esta ruta que busca a ese usuario y se fija si dono
//hace menos de un minuto, si dono hace menos de un minuto.. entonces da las gracias (deberia enviar un mail). solo afecta a usuarios
//que donaron hace menos de un minuto y son redirigidos al home, ahi se le agradece al usuario.
//pd: lo ideal es hacerlo de otra manera con webhooks de stripe pero se dificulta para el tiempo que queda
// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = httpServer;

