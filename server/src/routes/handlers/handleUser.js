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
    
    if(name.includes("@")){
        let newName =[]
        for(let i = 0; name[i] !== "@"; i++){
            newName.push(name[i])   
        }   
        let name1 = newName.join("")
        const userCreado = await User.create({
            name: name1,
            email,
            picture,
        })
        
    } else {
    const userCreado = await User.create({
        name,
        email,
        picture,
    }).catch((error)=>{console.log('')})
    console.log('usuario creado',name)
    res.status(200).send(userCreado);}
      
}else{
    console.log('usuario ya estaba creado');
    res.status(200).send(user);
}
}