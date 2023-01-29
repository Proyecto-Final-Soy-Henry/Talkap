const {User} = require('../../db.js');
module.exports =async function handleMyData ({email}){
    return user = await User.findByPk(email);
    
}