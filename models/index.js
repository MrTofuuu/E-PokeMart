const Trainer = require('./Trainer');
const Item = require('./Item');
const Pokemon = require('./Pokemon');
const Order = require('./Order');

trainer.hasMany(pokemon, {
    foreignKey: 'trainer_id',
});

trainer.hasMany(item, {
    foreignKey: 'trainer_id',
});

trainer.hasMany(order, {
    foreignKey: 'trainer_id',
});

pokemon.hasOne(trainer, {
    foreignKey: 'pokemon_id',
});

item.hasOne(trainer, {
    foreignKey: 'item_id',
});

order.hasOne(trainer, {
    foreignKey: 'order_id',
});

order.hasMany(pokemon, {
    foreignKey: 'order_id',
});

order.hasMany(item, {
    foreignKey: 'order_id',
});

module.exports = { trainer, pokemon, item, order };