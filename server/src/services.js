//MODELOS DB
const { User, Message } = require("./db");
const sendMail = require('./routes/handlers/sendMail.js')
const cloudinary = require("cloudinary").v2;
const stripe = require("stripe") ("sk_test_51MUvUdLFWXfNVGMT22fgX4hLo2hDVGvPUYl3ZhvFyrAOkcMHZkYuRVEbUwAx54HG2QlaX9RIp3Bcd6wRpQkvGiQv00gal07pBB");

cloudinary.config({
  //configuramos cloudinary
  cloud_name: "daekdf1sh",
  api_key: "838392469389272",
  api_secret: "hInStLPoBP5LBqsfw58NSlb8Y-Y",
}); ///a futuro seria guardar esto en el archivo .env

async function initGroup() {
  const userCreate = await User.create({
    name: "CHAT GRUPAL",
    email: "group@talkap",
    picture:
      "https://png.pngtree.com/png-vector/20191130/ourlarge/pngtree-group-chat-icon-png-image_2054401.jpg",
    connected: true,
    type: "group",
  }).catch((error) => {
   
  });
}

async function validatorUser(user, socket) {
  //desestructuro props
  const { email, name, picture } = user;
  //valida si existe en mi DB
  
  const donadores = await Donadores()
  const value = await User.findByPk(email);
  await donadores.forEach(i=>{
    SetDonor(i)
  })
  if (!value) {
    //Users admins
    const admins = [
      "gttnguido@gmail.com",
      "vaadm1n2@gmail.com",
      "joakig6@gmail.com",
      "ignaciorossatti9@gmail.com",
      "brenneke.ruger@gmail.com",
      "renzodoratto1@hotmail.com",
      "alejandrogcandia@gmail.com",
    ];
    let typeUser = "user";
    if (admins.some((e) => e === user.email)) {
      typeUser = "admin";
    }
    //SI NO SE CREO EL USUARIO EN MI DB
    const userCreate = await User.create({
      name,
      email,
      picture,
      connected: true,
      type: typeUser,
      socket,
      donor:donadores.includes(email)
    }).catch((error) => {
      console.log("");
    });
    //se manda mail de bienvenido
    sendMail(email,'welcome');
    console.log("Usuario :" + name + " - creado y conectado");
  } else {
    //SI YA ESTABA CREADO ACTUALIZO SU PROPIEDAD CONNECTED
    await User.update({ connected: true, socket }, { where: { email } });
    console.log("usuario :" + name + " - conectado");
  }

  return await User.findAll();
}

async function getMyData({ email }) {
  //devuelve los datos del  usuario
  return (user = await User.findOne({
    where: {
      email,
    },
  }));
}
// DEVUELVE TODOS LOS MENSAJES
async function getAllMessages() {
  return await Message.findAll();
}
async function getMessages(user) {
  let arrayMsj = [];
  //obtengo los mensajes enviados por el usuario
  const messagesUser = await Message.findAll({
    where: {
      user: user.email,
    },
  });
  //Filtro los que no son para el grupo.

  const filter = messagesUser.filter((msj) => msj.receiver !== "group@talkap");

  //pusheo el resultado
  arrayMsj = arrayMsj.concat(filter);
  //obtengo los mensajes recibidos por el usuario

  const messagesReceiver = await Message.findAll({
    where: {
      receiver: user.email,
    },
  });
  arrayMsj = arrayMsj.concat(messagesReceiver);

  return arrayMsj;
  // const messagesGroup = getMessagesGroup();
  // const total =  arrayMsj.concat(messagesGroup);

  // //hago un filtro momentaneo para que no me traiga los enviados a un grupo.

  // //concateno al array Msj

  // return total;
}
async function getMessagesGroup() {
  const messages = await Message.findAll({
    where: {
      receiver: "group@talkap",
    },
  });
  return messages;
}
async function getUsers() {
  //retorna la lista de todos los usuarios
  const user = await User.findAll();

  return user;
}

async function setMessage(msj) {
  //  const {user,message,receiver} = msj;
  const { user, receiver } = msj;

  const AudioUpload = msj.audio
    ? await cloudinary.uploader.upload(msj.audio, {
        resource_type: "auto", //importante aclara el tipo de archivo
        folder: "audiochats",
        public_id: "private_audio/audioschatapp75281abc",
        type: "private",
      })
    : null;

  const VideoUpload = msj.video
    ? await cloudinary.uploader.upload(msj.video, {
        resource_type: "video", //importante aclara el tipo de archivo
        folder: "videoschats",
        public_id: "private_image",
        type: "private",
      })
    : null;
  const ImageUpload = msj.image
    ? await cloudinary.uploader.upload(msj.image, {
        resource_type: "image",
        folder: "imageschats",
        public_id: "private_image",
        type: "private",
      })
    : null;
  const audio = AudioUpload ? AudioUpload.secure_url : null;
  const video = VideoUpload ? VideoUpload.secure_url : null;
  const image = ImageUpload ? ImageUpload.secure_url : null; ///si recibo ImageUpload es xq la imagen se guardo en cloudinary y nos quedamos con la url que devuelve
  const message = image ? image : video ? video : audio ? audio : msj.message; ///si image/video no guardó nada es xq no recibimos imagenes/video asi que devolvemos el mensaje

  const result = await Message.create({
    user,
    message,
    receiver,
    image,
    video,
    audio,
  });
  return result;
}

async function handleExit({ email }) {
  await User.update({ connected: false }, { where: { email } });
  console.log("usuario :" + email + " - desconectado");
}
/////////////  SERVICIOS UPDATE INFO ////////////
async function updateInfo(email, nombre) {
  await User.update({ name: nombre }, { where: { email: email } });

  return (user = await User.findByPk(email));
}
async function updatePic(email, pic) {
  await User.update({ picture: pic }, { where: { email: email } });

  return (user = await User.findByPk(email));
}
async function updateBio(email, bio) {
  await User.update({ bio: bio }, { where: { email: email } });

  return (user = await User.findByPk(email));
}
async function updateFriends(user, my) {
  const dataUser = await User.findByPk(my.email);
  let amigos = [];
  let friends = JSON.parse(dataUser.dataValues.friends);
  if (friends) {
    if (!friends.some((e) => e.email == user.email)) {
      friends.push(user);
      await User.update(
        { friends: JSON.stringify(friends) },
        { where: { email: my.email } }
      );
      return (user = await User.findByPk(my.email));
    }
  } else {
    amigos.push(user);
    await User.update(
      { friends: JSON.stringify(amigos) },
      { where: { email: my.email } }
    );
  }
  return (user = await User.findByPk(my.email));
}

async function deleteFriend(user, my) {
  const dataUser = await User.findByPk(my.email);
  let friends = []
  if(dataUser.dataValues){
   friends = JSON.parse(dataUser.dataValues.friends);
  }
 

  let filterFriend = friends.filter((e) => {
    return e.email !== user.email;
  });

  await User.update(
    { friends: JSON.stringify(filterFriend) },
    { where: { email: my.email } }
  );

  return (user = await User.findByPk(my.email));
}
////   traer usuario con socket id

async function getSocket(socket) {
  const user = await User.findOne({ where: { socket } });

  return user;
}

//// cambiar estado

async function upStatus(email, status) {
  if (status == "con") {
    await User.update({ connected: true }, { where: { email } });
  } else if (status == "des") {
    await User.update({ connected: false }, { where: { email } });
  }
  user = await User.findByPk(email);
  return user;
}

///// baneados

async function setBanned(my, user) {
  let bans = [];

  if (my.banned) {
    bans = JSON.parse(my.banned);
  }

  bans.push(user.email);

  await User.update(
    { banned: JSON.stringify(bans) },
    { where: { email: my.email } }
  );

  users = await User.findByPk(my.email);

  return users;
}

async function unBanned(my, user) {
  let bans = [];

  if (my.banned) {
    bans = JSON.parse(my.banned);
  }

  let bannedF = bans.filter((e) => {
    return e !== user.email;
  });

  await User.update(
    { banned: JSON.stringify(bannedF) },
    { where: { email: my.email } }
  );

  users = await User.findByPk(my.email);

  return users;
}
// black list
async function setBlackList(email){
  let boolean; 
  let user = await User.findByPk(email);
  if(user.type==='user'){
    if(user.blacklist){
      boolean =  false;
    }else{
      boolean =  true;
      sendMail(email, 'ban')
    }
    await User.update({blacklist:boolean},{where:{email}});
  }
return true;
}
//////////////////// calificar /////////////

async function setStars(user,star){

  let s = star
  let starsTotal =[]
  let starsDiv=[]
  let stars = 0
  
  user.starTotal && (starsTotal = JSON.parse(user.starTotal))
  
  if(starsTotal.some((e)=>{return e.email === star.email})){
  return
  
  }else {
    starsTotal.push(star)
   
    for (let i = 0; i < starsTotal.length; i++) {
      
      starsDiv.push(starsTotal[i].star)
    }
  }
   
  starsDiv.forEach(element => {
    stars += element
  });
  stars = Math.round(stars /( starsDiv.length))


  console.log(starsTotal)
   await User.update({stars,starTotal: JSON.stringify(starsTotal)},{ where: { email : user.email } })

  my = await User.findByPk(star.email);
  
  return my

  
}
///////////donaciones

async function SetDonor(email){//establecemos donador


  const newDonor= await User.update(
   {donor:true},
   {where:{email:email}}
  )
  return newDonor
}
async function Donadores(){
 
   
   const paylist = await stripe.charges.list({ limit: 1000 })//traemos lista de las ultimas 1000 donaciones
   const filtrado = paylist.data.map(i=>{
      return{
        name:i.billing_details.name,
        email:i.billing_details.email,
        created:new Date(i.created * 1000)
      }
   }).filter(i=>i.name||i.email)//nos quedamos con el nombre , mail, y fecha de donacion
 
   const donadores =  filtrado.filter((item, index, self) => 
   self.findIndex(t => t.email === item.email) === index
 );///sacamos los repetidos(solo nos interes quienes donaron alguna vez en este caso)
  
 const cambiar = await donadores.forEach( i => {
    SetDonor(i.email)
 });///por cada donador nos fijamos el mail y en nuestro usuarios quienes coincidan le cambiamos su propiedad donador a true

 const emails = donadores.map(i=>i.email)///nos quedamos solo con el mail de cada donador 
 // console.log(emails) por si quieren ver todos los donadores
 return emails
}

async function getUsertodonate(email) {//usuarios que van a donar 
 const Donors = await User.findOne({
   where:{
     email:email,
     donor:false,
   }
 });

 return Donors;
}
async function getDonors(email) {///para obtener donadores true
 const Donors = await User.findAll({
   where:{
     email:email,
     donor:true
   }
 });

 return Donors;
}

async function getlastDonates(){
 const paylist = await stripe.charges.list({ limit: 1000 })//nos quedamos con las ultimas 1000 donaciones
 const filtrado = paylist.data.map(i=>{
    return{
      name:i.billing_details.name,
      email:i.billing_details.email,
      created:new Date(i.created * 1000)
    }///nos quedamos con los nombres , mails y FECHAS DE DONACION,
 }).filter(i=>i.name||i.email)//eliminamos los null(donadores anonimos)
 return filtrado
}

const getClosestObject = (objects, currentTime) => {///funcion que va a recibir al objeto de donadores y en base a su fecha y hora hara una comparacion
 const sortedObjects = objects.filter(object => { /// se quedara con el ultimo donador , o ultima donacion del usuario que luego le digamos, 
   const timeDiff = currentTime - new Date(object.created);//la idea es que en base a una comparacion nos enteremos que X usuario hizo una donacion hace menos de un minuto
   return timeDiff < 60 * 1000;                            //y en base a eso devolvemos el mensaje de gracias por donar(menos de un minuto ya que al donar redirige al home y ahi ve el mensaje) 
 }).sort((a, b) => {
   const timeDiffA = Math.abs(currentTime - new Date(a.created));
   const timeDiffB = Math.abs(currentTime - new Date(b.created));
   
   return timeDiffA - timeDiffB;
 });
 
 return sortedObjects[0];//retornamos la donacion de un usuario espesifico , mas reciente(falta mejorar pero esta funcional, faltaria ajustar el rango de error para que sea minimo)
};

// async function updatedonor(email){///no funcional pero podria servir para un servicio premium mas adelante, y darle la baja si no paga xd
//   const newDonor= await User.update(
//    {donor:false},
//    {where:{email:email}}
//   )
//   return newDonor
// }

module.exports = {
  updateBio,
  updatePic,
  updateInfo,
  validatorUser,
  getMyData,
  getMessages,
  getUsers,
  setMessage,
  initGroup,
  handleExit,
  getMessagesGroup,
  updateFriends,
  deleteFriend,
  getSocket,
  upStatus,
  getAllMessages,
  setBanned,
  unBanned,
  setBlackList,
  setStars,
  getDonors,
  SetDonor,
 Donadores,
 getUsertodonate,
 getlastDonates,
 getClosestObject,
};
