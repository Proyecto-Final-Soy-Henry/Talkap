const {DataTypes} = require ('sequelize'); 
module.exports = (sequelize)=>{
    sequelize.define('message',{

        id:{
            type:DataTypes.UUID,
            primaryKey:true,
            defaultValue: DataTypes.UUIDV4,
        },
        user:{
            type:DataTypes.STRING,

        },
      
        message:{
            type:DataTypes.STRING,
            allowNull:true,
        },
        receiver:{
            type:DataTypes.STRING,

        }


    });
}