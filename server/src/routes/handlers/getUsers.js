const {User} = require('../../db.js');

module.exports =async function getUsers(){
    return await User.findAll()

}