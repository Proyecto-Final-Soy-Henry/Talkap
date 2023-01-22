const {User} = require('../../db.js');
module.exports = async function handleExit ({email,name}){
    await User.update({connected:false},{where:{email}});
    console.log('usuario :'+name+' - desconectado');
}