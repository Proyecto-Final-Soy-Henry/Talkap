const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("message", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    user: {
      type: DataTypes.STRING,
    },

    message: {
      type: DataTypes.STRING(2000),
      allowNull: true,
    },
    receiver: {
      type: DataTypes.STRING,
    },
    Image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    Video: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
    },
  });
};
