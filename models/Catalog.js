const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Catalog extends Model {}

Catalog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    types: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    sprites: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    trainer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'trainer',
        key: 'trainer_id',
      },
      allowNull: true,
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'catalog',
  }
);

module.exports = Catalog;
