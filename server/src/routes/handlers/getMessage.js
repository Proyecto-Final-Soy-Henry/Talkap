const {Message} = require('../../db.js');
module.exports =async function getMessage (){
    return await Message.findAll();
}