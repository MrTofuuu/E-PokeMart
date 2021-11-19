const Trainer = require('./Trainer');
const Order = require('./Order');
const Catalog = require('./Catalog');

Trainer.hasMany(Catalog, {
  foreignKey: 'trainer_id',
  constraints: false,
});

Catalog.belongsTo(Trainer, {
  foreignKey: 'trainer_id',
  constraints: false,
});

Trainer.hasMany(Catalog, {
  foreignKey: 'trainer_id',
  constraints: false,
});

Trainer.hasMany(Order, {
  foreignKey: 'trainer_id',
  constraints: false,
});

Order.belongsTo(Trainer, {
  foreignKey: 'order_id',
  constraints: false,
});

Order.hasMany(Catalog, {
  foreignKey: 'order_id',
  constraints: false,
});

module.exports = { Trainer, Order, Catalog };
