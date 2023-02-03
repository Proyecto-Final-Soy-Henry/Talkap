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
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    video: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    audio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
    },
  });
};
