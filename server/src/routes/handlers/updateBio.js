const {User} = require('../../db.js');

module.exports =async function updateBio (email, bio){
      
      await User.update(
         {bio: bio},
        {where:{email: email}}
      )
         
      return user = await User.findByPk(email);
}