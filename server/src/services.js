//MODELOS DB
const {User,Message} = require('./db');

const cloudinary = require('cloudinary').v2;

cloudinary.config({//configuramos cloudinary
    cloud_name: "daekdf1sh",
    api_key: "838392469389272",
    api_secret: "hInStLPoBP5LBqsfw58NSlb8Y-Y"
  });///a futuro seria guardar esto en el archivo .env

async function initGroup (){
    const userCreate = await User.create({
        name:'CHAT GRUPAL',
        email:'group@talkap',
        picture:"https://png.pngtree.com/png-vector/20191130/ourlarge/pngtree-group-chat-icon-png-image_2054401.jpg",
        connected:true,
        type:'group'
    }).catch((error)=>{console.log('')})
}

 async function validatorUser(user){
    //desestructuro props
    const {email,name,picture} = user;
    //valida si existe en mi DB
    const value =  await User. findByPk(email);
    if(!value){
    //SI NO SE CREO EL USUARIO EN MI DB
        const userCreate = await User.create({
            name,
            email,
            picture,
            connected:true,
            type:'user'
        }).catch((error)=>{console.log('')})
      
        console.log('Usuario :'+name+' - creado y conectado')
        
        
    }else{
    //SI YA ESTABA CREADO ACTUALIZO SU PROPIEDAD CONNECTED
        await User.update({connected:true},{where:{email}});
         console.log('usuario :'+name+' - conectado');
         
         
     }

     return  await User.findAll();

}

async function getMyData({email}){
    //devuelve los datos del  usuario
    return user = await User.findOne({where:{
        email
    }});
}
async function getMessages(user){
    
let arrayMsj = [];    
//obtengo los mensajes enviados por el usuario
const messagesUser =  await Message.findAll({
    where:{
        user:user.email,
    }
});
//Filtro los que no son para el grupo.

const filter = messagesUser.filter(msj=>msj.receiver!=='group@talkap')

//pusheo el resultado
arrayMsj = arrayMsj.concat(filter);
//obtengo los mensajes recibidos por el usuario

 const messagesReceiver =  await Message.findAll({
    where:{
        receiver:user.email
    }
});
arrayMsj = arrayMsj.concat(messagesReceiver);

return arrayMsj;
// const messagesGroup = getMessagesGroup();
// const total =  arrayMsj.concat(messagesGroup);

// //hago un filtro momentaneo para que no me traiga los enviados a un grupo.

// //concateno al array Msj



// return total;    
}
async function getMessagesGroup(){
    const messages =  await Message.findAll({
        where:{
            receiver:'group@talkap'
        }
    });
    return messages
}
async function getUsers(){
   //retorna la lista de todos los usuarios
    const user =  await User.findAll();
    
    return user;}

 async function setMessage(msj){   
    //  const {user,message,receiver} = msj;
     const {user,receiver} = msj;
        console.log(msj.id)
        // console.log(Message.findOne(({
        //     where: {id: msj.id}
        // })))
        // if(Message.filter((e) =>  e.id == id)){}

        const VideoUpload=msj.video?await cloudinary.uploader.upload(msj.video,{
            resource_type: "video",//importante aclara el tipo de archivo
            folder:"videoschats",
            public_id: "private_image",
            type: "private",
        }):null
        const ImageUpload=msj.image?await cloudinary.uploader.upload(msj.image,{
            resource_type: "image",
            folder:"imageschats",
            public_id: "private_image",
            type: "private"
        }):null

        const video =VideoUpload?VideoUpload.secure_url:null
        const image =ImageUpload?ImageUpload.secure_url:null///si recibo ImageUpload es xq la imagen se guardo en cloudinary y nos quedamos con la url que devuelve
        const message=image?image:
                  video?video:
                  msj.message///si image/video no guardó nada es xq no recibimos imagenes/video asi que devolvemos el mensaje


        const result = await Message.create({user,message,receiver,image,video});
        return result;
    }

async function handleExit({email}){
    await User.update({connected:false},{where:{email}});
    console.log('usuario :'+email+' - desconectado');
}
/////////////  SERVICIOS UPDATE INFO ////////////
async function updateInfo (email, nombre){
      
    await User.update(
       {name: nombre},
      {where:{email: email}}
    )
       
   return user = await User.findByPk(email)
}
async function updatePic (email, pic){
      
    await User.update(
       {picture: pic},
      {where:{email: email}}
    )
       
    return user = await User.findByPk(email);
}
async function updateBio (email, bio){
      
    await User.update(
       {bio: bio},
      {where:{email: email}}
    )
       
    return user = await User.findByPk(email);
}
module.exports={
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
}