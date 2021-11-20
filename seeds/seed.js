const sequelize = require('../config/connection');
const { Trainer } = require('../models');

const trainerData = require('./trainerData');
const seedCatalog = require('./catalogData.js');
const seedOrders = require('./orderData.js');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });

    await Trainer.bulkCreate(trainerData, {
      individualHooks: true,
      returning: true,
    });
    await seedCatalog();
    await seedOrders();
  } catch (err) {
    console.log(err);
  }
  process.exit(0);
};

seedAll();
