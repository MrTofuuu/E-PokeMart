const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Item extends Model {}

Item.init(
    {
        item_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        item_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        item_type: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
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
        modelName: 'item',
    }
);

module.exports = Item;
