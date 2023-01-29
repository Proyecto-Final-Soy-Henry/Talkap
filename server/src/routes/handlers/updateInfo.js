const {User} = require('../../db.js');

module.exports =async function updateInfo (email, nombre){
      
      await User.update(
         {name: nombre},
        {where:{email: email}}
      )
         
     return user = await User.findByPk(email)
}