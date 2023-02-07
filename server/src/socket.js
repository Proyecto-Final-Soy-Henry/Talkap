const { Server } = require("socket.io");
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
  updateFriends,
  deleteFriend,
  getSocket,
  upStatus,
  getAllMessages,
  setBanned,
  unBanned,
  setBlackList,
  setStars
} = require("./services.js");
let io;

//Inicializo el SOCKET con el httpServer pasado por parámetro
module.exports = function initialSocket(httpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });

  //Pongo a escuchar io
  io.on("connection", (socket) => {
    console.log(`Connected: ${socket.id}`);

    socket.on("disconnect", async () => {
      console.log(`Disconnected: ${socket.id}`)
      const user = await getSocket(socket.id);
     
        if(user){
          const create = await handleExit(user.dataValues);
          const users = await getUsers();
          socket.broadcast.emit("users", users);
        }
       
    
    
    
    });

    // RUTAS

    //JOIN
    socket.on("join", async (user) => {
      //IMPLEMENTACIÖN DE LOS NUEVO

      //verifico y devuelvo usuarios actualizados.

      const users = await validatorUser(user,socket.id);
      // obtengo los datos del usuarios conectado.
      const myData = await getMyData(user);
      // obtengo todos los mensajes enviados y recibidos del usuario
      const message = await getMessages(user);
      //obtengo todos los mensajes del grupo.
      const messageGroup = await getMessagesGroup();
      const concat = message.concat(messageGroup);
      // solo si es un admin mando todos los mensajes para el dashboard
     if(myData.dataValues.type==='admin'){
      const msjs = await getAllMessages();
      socket.emit('mensajes',msjs);
     }
      
      socket.broadcast.emit("users", users);
      socket.emit("users", users);
      socket.emit(user.email, { myData, message: concat });
    });

    // ESCUCHO LA RUTA EXIT
    socket.on("exit", async (user) => {
      const create = await handleExit(user);
      const users = await getUsers();
      socket.broadcast.emit("users", users);
    });

    //ESCUCHO LA RUTA CHAT
    socket.on("chat", async (msj) => {
      const { user, receiver, type, id } = msj;
      if (receiver != user) {
        //GUARDO EL MENSAJE EN LA DB
        const messages = await setMessage(msj);

        const { dataValues } = messages;

        if (receiver != "group@talkap") {
          socket.emit(user, { msj: dataValues });
          socket.broadcast.emit(receiver, { msj: dataValues });
          // io.to(receiver).emit({ msj:dataValues});
        } else {
          socket.emit("group", dataValues);
          socket.broadcast.emit("group", dataValues);
        }
      }
            //evía los mensajes para los admins
            const msjs = await getAllMessages();
            socket.broadcast.emit('mensajes',msjs);
    });

    // RUTAS DE UPDATE INFO

    socket.on("updateInfo", async ({ email, nombre }) => {
      const info = await updateInfo(email, nombre);
      socket.emit("updateInfo", info);
      const allUsers = await getUsers();
      socket.broadcast.emit("join", allUsers);
      socket.broadcast.emit("users", allUsers);
    });

    socket.on("updatePic", async ({ email, pic }) => {
      const info = await updatePic(email, pic);
      socket.emit("updatePic", info);
      const allUsers = await getUsers();
      socket.broadcast.emit("join", allUsers);
      socket.broadcast.emit("users", allUsers);
    });

    socket.on("updateBio", async ({ email, bio }) => {
      const info = await updateBio(email, bio);
      socket.emit("updateBio", info);
      const allUsers = await getUsers();
      socket.broadcast.emit("join", allUsers);
      socket.broadcast.emit("users", allUsers);
    });

    socket.on("friends",async({user,my})=>{

        const info = await updateFriends(user,my)
        // console.log(info)
        socket.emit(my.email, { myData : info });
    })

    socket.on("deleteFriends",async({user,my})=>{

      const info = await deleteFriend(user,my)
      socket.emit(my.email, { myData : info });
   })

   socket.on("status",async({user,status})=>{
    
      const info = await upStatus(user.email,status)
      const allUsers = await getUsers();
      
      socket.broadcast.emit("users", allUsers);
      socket.emit(user.email, { myData : info });
   })

   socket.on("banned",async({user,my})=>{
    

    const info = await setBanned(my,user)
    
    socket.emit(my.email, { myData : info });
  })

    socket.on("unBanned",async({user,my})=>{

      const info = await unBanned(my,user)
      socket.emit(my.email, { myData : info });
    })
       // black list
    socket.on('blacklist',async (email)=>{
      await setBlackList(email)
     const allUsers = await getUsers()
     const myData = await getMyData({email:email});
     socket.broadcast.emit("users", allUsers);
     socket.broadcast.emit(email,{myData:myData.dataValues})


    })
    
    socket.on("stars",async({user,star})=>{
    

      const info = await setStars(user,star)

      const allUsers = await getUsers();
      socket.broadcast.emit("users", allUsers);
      socket.emit("users", allUsers)
      const my = await getMyData(user)
      socket.broadcast.emit(my.email,{myData : my})
      
    })

  });

  //retorno la conexion configurada//
  return io;
};
