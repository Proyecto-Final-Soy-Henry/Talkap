const {User} = require('../../db.js');

module.exports = async function handleUsers (value){
        //recupero el body
const {email,name,picture} = value;
let name1 = name;
//traigo el usuario si está creado
const user =  await User. findByPk(email);
;

if(name.includes("@")){
    let newName =[]
    for(let i = 0; name[i] !== "@"; i++){
        newName.push(name[i])   
    }   
    name1 = newName.join("")}





if(!user){
    
    const userCreate = await User.create({
        name:name1,
        email,
        picture,
        connected:true
    }).catch((error)=>{console.log('')})
  
    console.log('Usuario :'+name+' - creado y conectado')
    
    
}else{
    
   await User.update({connected:true},{where:{email}});
    console.log('usuario :'+name+' - conectado');
    
    
}
return  await User.findAll();

}