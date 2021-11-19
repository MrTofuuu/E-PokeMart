const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Order extends Model {}

Order.init(
  {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    trainer_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'trainer',
        key: 'trainer_id',
      },
      allowNull: false,
    },
    order_date: {
      type: DataTypes.DATE,
    },
    order_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    order_quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'order',
  }
);

module.exports = Order;
