const Trainer = require('./Trainer');
const Item = require('./Item');
const Pokemon = require('./Pokemon');
const Order = require('./Order');

Trainer.hasMany(Pokemon, {
    foreignKey: 'trainer_id',
});

Trainer.hasMany(Item, {
    foreignKey: 'trainer_id',
});

Trainer.hasMany(Order, {
    foreignKey: 'trainer_id',
});

Pokemon.hasOne(Trainer, {
    foreignKey: 'pokemon_id',
});

Item.hasOne(Trainer, {
    foreignKey: 'item_id',
});

Order.hasOne(Trainer, {
    foreignKey: 'order_id',
});

Order.hasMany(Pokemon, {
    foreignKey: 'order_id',
});

Order.hasMany(Item, {
    foreignKey: 'order_id',
});

module.exports = { Trainer, Pokemon, Item, Order };