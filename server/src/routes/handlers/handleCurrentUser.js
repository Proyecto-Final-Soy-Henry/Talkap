const {User} = require('../../db.js');

module.exports = async function handleCurrentUser (req,res){

    const {email} = req.params
    let result = {}

    try{
        const user =  await User.findOne({
            where: {email}
        });
        
        if(user){

            result = {
                name: user.dataValues.name,
                email: user.dataValues.email,
                picture: user.dataValues.picture,
            }

            res.status(200).json(result)
        }

    }catch({message}){
        res.status(404).json(message)
    }
    
}