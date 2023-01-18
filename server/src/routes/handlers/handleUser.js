const {User} = require('../../db.js');
module.exports =async function handleUser (req,res){
        //recupero el body
const {email,name,picture} = req.body;
//traigo el usuario si está creado
const user =  await User.findAll({
where:{
    email,
}
});

if(user.length===0){
    const userCreado = await User.create({
        name,
        email,
        picture,
    }).catch((error)=>{console.log('')})
    console.log('usuario creado')
    res.status(200).send(userCreado);
}else{
    console.log('usuario ya estaba creado');
    res.status(200).send(user);
}
}