const {Message} = require('../../db.js');
module.exports =async function handleChat (value){

    const {user,message} = value;
    const createMessage = await Message.create({user,message})
    console.log(createMessage)
    return await Message.findAll();

}