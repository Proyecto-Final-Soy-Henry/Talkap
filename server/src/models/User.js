const {DataTypes} = require ('sequelize'); 
module.exports = (sequelize)=>{

sequelize.define('user',{
// id:{
//     type:DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
 
// },
nick:{
    type:DataTypes.STRING,
},
name:{
    type:DataTypes.STRING,
    allowNull:false,
},
apellido:{
    type:DataTypes.STRING,

},
email:{
    type:DataTypes.STRING,
    allowNull:false,
    primaryKey:true,
},
picture:{
    type:DataTypes.STRING,
    
},
connected:{
    type:DataTypes.BOOLEAN,
    defaultValue:false,
},
bio:{
    type:DataTypes.STRING,
},
type:{
    type:DataTypes.STRING,
},
users:{
    type:DataTypes.JSON,
},
admin:{
    type:DataTypes.JSON
},
groupName :{
    type:DataTypes.STRING,
},

Favourite:{
    type:DataTypes.JSON,
},



//comentario
//comentario dos
//comentario tres


});
};