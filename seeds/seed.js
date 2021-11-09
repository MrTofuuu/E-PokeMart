const sequelize = require('../config/connection');
const { Trainer, Pokemon, Order, Item } = require('../models');

const trainerData = require('./trainerData.json');
const pokemonData = require('./pokemonData.json');
const itemData = require('./itemData.json');
const orderData = require('./orderData.json');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await trainerData();

    await pokemonData();

    await itemData();

    await orderData();

    process.exit(0);
};

seedAll();
