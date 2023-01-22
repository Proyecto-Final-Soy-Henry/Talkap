const {Message} = require('../../db.js');
module.exports =async function handleChat (value){

    const {user,message,receiver} = value;
    const createMessage = await Message.create({user,message,receiver})

    return await Message.findAll();

}