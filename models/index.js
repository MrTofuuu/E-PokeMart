const Trainer = require('./Trainer');
const Item = require('./Item');
const Pokemon = require('./Pokemon');
const Order = require('./Order');

Trainer.hasMany(Pokemon, {
    foreignKey: 'trainer_id',
    constraints: false,
});

Pokemon.belongsTo(Trainer, {
    foreignKey: 'trainer_id',
    constraints: false,
});

Trainer.hasMany(Item, {
    foreignKey: 'trainer_id',
    constraints: false,
});

Item.belongsTo(Trainer, {
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

Order.hasMany(Pokemon, {
    foreignKey: 'order_id',
    constraints: false,
});

Order.hasMany(Item, {
    foreignKey: 'order_id',
    constraints: false,

});

module.exports = { Trainer, Pokemon, Item, Order };