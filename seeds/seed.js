const sequelize = require('../config/connection');
const { Trainer, Pokemon, Order, Item } = require('../models');

const trainerData = require('./trainerData.json');
const pokemonData = require('./pokemonData');
const itemData = require('./itemData.json');
const orderData = require('./orderData.json');
const seedPokemon = require('./pokemonData');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });

    await Trainer.bulkCreate(trainerData, {
      individualHooks: true,
      returning: true,
    });

    await seedPokemon();

    await Item.bulkCreate(itemData, {
      individualHooks: true,
      returning: true,
    });

    await Order.bulkCreate(orderData, {
      individualHooks: true,
      returning: true,
    });
  } catch (err) {
    console.log(err);
  }
  process.exit(0);
};

seedAll();
