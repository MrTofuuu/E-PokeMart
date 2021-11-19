const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pokemon extends Model {}

Pokemon.init(
    {
        pokemon_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        pokemon_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pokemon_level: {
            type: DataTypes.INTEGER,
        },
        pokemon_type: {
            type: DataTypes.STRING,
            allowNull: false,
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
        pokemon_sprites: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pokemon',
    }
);

module.exports = Pokemon;
