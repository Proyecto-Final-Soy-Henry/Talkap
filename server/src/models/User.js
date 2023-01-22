const {DataTypes} = require ('sequelize'); 
module.exports = (sequelize)=>{

sequelize.define('user',{
// id:{
//     type:DataTypes.UUID,
//     defaultValue: DataTypes.UUIDV4,
    
// },
name:{
    type:DataTypes.STRING,
    allowNull:false,
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
}

//comentario
//comentario dos


});
};