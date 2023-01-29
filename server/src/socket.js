const {Server} =  require ('socket.io');
const {
  validatorUser,
  getMyData,
  getMessages,
  getUsers,
  setMessage,
  handleExit,
  updateBio,
  updatePic,
  updateInfo,
  getMessagesGroup,
} =  require('./services.js');

let io ;

//Inicializo el SOCKET con el httpServer pasado por parámetro
module.exports = function initialSocket(httpServer){
 io =  new Server(httpServer,{  
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

        //IMPLEMENTACIÖN DE LOS NUEVO
          
              //verifico y devuelvo usuarios actualizados.
       
              const users = await validatorUser(user)
                // obtengo los datos del usuarios conectado.
                const myData = await getMyData(user);
                // obtengo todos los mensajes enviados y recibidos del usuario
              const message =  await getMessages(user);   
           //obtengo todos los mensajes del grupo.
           const messageGroup = await getMessagesGroup();
            const concat = message.concat(messageGroup);


        socket.emit(user.email,{myData,message:concat});
        socket.broadcast.emit('users',users);
       
     });
  
  
      // ESCUCHO LA RUTA EXIT
      socket.on('exit',async (user)=>{
         const create = await handleExit(user);
         const users = await getUsers();
         socket.broadcast.emit('users',users)
        
      });
  
     
  
  
      //ESCUCHO LA RUTA CHAT
      socket.on('chat',async (msj)=>{
        const {user,receiver,type,id} = msj;
        if(receiver!=user){
        //GUARDO EL MENSAJE EN LA DB
        const messages= await setMessage (msj);
        
        const { dataValues} = messages;  

             
            if(receiver!='group@talkap'){
              
              socket.emit(user,{ msj:dataValues})
             socket.broadcast.emit(receiver,{ msj:dataValues});
            // io.to(receiver).emit({ msj:dataValues});
            }
             else{
          
              socket.broadcast.emit('group',dataValues);
             }
            
            
          }
          
          
      
       
        

  
      });

        // RUTAS DE UPDATE INFO

     socket.on("updateInfo", async({email, nombre}) => {

      const info = await updateInfo(email, nombre)
      socket.emit('updateInfo', info)
      const allUsers = await getUsers()
      socket.broadcast.emit('join', allUsers)
      socket.broadcast.emit('users', allUsers)
     })
  
     socket.on("updatePic", async({email, pic}) => {
  
      const info = await updatePic(email, pic)
      socket.emit('updatePic', info)
      const allUsers = await getUsers()
      socket.broadcast.emit('join', allUsers)
      socket.broadcast.emit('users', allUsers)
     })
  
     socket.on("updateBio", async({email, bio}) => {
  
      const info = await updateBio(email, bio)
      socket.emit('updateBio', info)
      const allUsers = await getUsers()
      socket.broadcast.emit('join', allUsers)
      socket.broadcast.emit('users', allUsers)
  
     })
  
      
  });


  //retorno la conexion configurada//
  return io;
  
}