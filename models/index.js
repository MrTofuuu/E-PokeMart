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
    foreignKey: 'trainer_id',
});

order.hasMany(pokemon, {
    foreignKey: 'pokemon_id',
});

order.hasMany(item, {
    foreignKey: 'item_id',
});

module.exports = { trainer, pokemon, item, order };