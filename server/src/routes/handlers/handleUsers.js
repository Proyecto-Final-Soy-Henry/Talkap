const {User} = require('../../db.js');

module.exports =async function handleUsers (value){
        //recupero el body
const {email,name,picture} = value;
let name1 = name;
//traigo el usuario si está creado
const user =  await User.findAll({
where:{
    email,
}
});

if(name.includes("@")){
    let newName =[]
    for(let i = 0; name[i] !== "@"; i++){
        newName.push(name[i])   
    }   
    name1 = newName.join("")}





if(user.length===0){
    
    const userCreate = await User.create({
        name:name1,
        email,
        picture,
    }).catch((error)=>{console.log('')})
  
    console.log('usuario creado')
    
    
}else{
    console.log('usuario ya estaba creado');
    
    
}
return  await User.findAll();

}