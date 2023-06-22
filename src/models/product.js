const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define(
    "product",{
      title: {
        type: DataTypes.STRING,
        defaultValue: "no tiene nombre",
      },
      description: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.REAL,
    },
      stock: {
        type: DataTypes.REAL,
    },
      image: {
        type: DataTypes.STRING,
    },
    }
  )
}