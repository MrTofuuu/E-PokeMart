const sequelize = require('../config/connection');
const { Trainer, Pokemon, Order, Item } = require('../models');

const trainerData = require('./trainerData.json');
const seedItems = require('./itemData.js');
const seedOrders = require('./orderData.js');
const seedPokemon = require('./pokemonData.js');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });

    await Trainer.bulkCreate(trainerData, {
      individualHooks: true,
      returning: true,
    });

    await seedPokemon();

    await seedItems();

    await seedOrders();
  } catch (err) {
    console.log(err);
  }
  process.exit(0);
};

seedAll();
