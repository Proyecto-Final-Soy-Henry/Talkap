const {Message} = require('../../db.js');
module.exports =async function handleChat (value){

    const {user,message,receiver} = value;
    const createMessage = await Message.create({user,message,receiver})
    //todos los mensajes que sean para el chat
    // const messageChat = await Message.findAll({
    //     where:{
    //         receiver:"CHAT GRUPAL"
    //     }
    // })
    // const receiverMessage = await Message.findAll({
    //     where:{
    //         receiver:user
    //     }
    // })
    // const messageAsent = await Message.findAll({
    //     where:{
    //         user
    //     }
    // })

    return await Message.findAll();

}