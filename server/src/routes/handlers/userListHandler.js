const {User} = require('../../db.js');
module.exports = async function userListHandler(req,res){
//traigo todos los usuarios
const user =  await User.findAll();

res.status(200).send(user);


}