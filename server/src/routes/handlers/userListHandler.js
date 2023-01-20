const {User} = require('../../db.js');
module.exports = async function userListHandler(){
//traigo todos los usuarios
const user =  await User.findAll();

return user;


}