const {User} = require('../../db.js');

module.exports =async function updatePic (email, pic){
      
      await User.update(
         {picture: pic},
        {where:{email: email}}
      )
         
      return user = await User.findByPk(email);
}