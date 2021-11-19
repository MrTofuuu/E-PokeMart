const { Catalog } = require('../models');

const catalogData = [
  {
    category: 'item',
    name: 'Master ball',
    types: 'pokeball',
    price: '1000',
    trainer_id: '1',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png',
  },
  {
    category: 'item',
    name: 'Awakening',
    types: 'Medical item',
    price: '10',
    trainer_id: '2',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/awakening.png',
  },
  {
    category: 'item',
    name: 'Paralyze-heal',
    types: 'Medical item',
    price: '10',
    trainer_id: '3',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/paralyze-heal.png',
  },
  {
    category: 'item',
    name: 'full-restore',
    types: 'Medical item',
    price: '15',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-restore.png',
  },
  {
    category: 'item',
    name: 'max-potion',
    types: 'Medical item',
    price: '13',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-potion.png',
  },
  {
    category: 'item',
    name: 'hyper-potion',
    types: 'Medical item',
    price: '12',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png',
  },
  {
    category: 'item',
    name: 'super-potion',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png',
  },
  {
    category: 'item',
    name: 'Ultra Ball',
    types: 'pokeball',
    price: '15',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png',
  },
  {
    category: 'item',
    name: 'Great ball',
    types: 'pokeball',
    price: '13',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png',
  },
  {
    category: 'item',
    name: 'Poke ball',
    types: 'pokeball',
    price: '5',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
  },
  {
    category: 'item',
    name: 'Potion',
    types: 'Medical item',
    price: '5',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png',
  },
  {
    category: 'item',
    name: 'Full heal',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-heal.png',
  },
  {
    category: 'item',
    name: 'Revive',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/revive.png',
  },
  {
    category: 'item',
    name: 'Max revive',
    types: 'Medical item',
    price: '20',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-revive.png',
  },
  {
    category: 'item',
    name: 'X Attack',
    types: 'Battle item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/x-attack.png',
  },
  {
    category: 'item',
    name: 'X Defense',
    types: 'Battle item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/x-defense.png',
  },
  {
    category: 'item',
    name: 'X Speed',
    types: 'Battle item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/x-speed.png',
  },
  {
    category: 'item',
    name: 'X Special attack',
    types: 'Battle item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/x-sp-atk.png',
  },
  {
    category: 'item',
    name: 'Burn heal',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/burn-heal.png',
  },
  {
    category: 'item',
    name: 'Ice heal',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-heal.png',
  },
  {
    category: 'pokemon',
    name: 'Bulbasaur',
    level: '1',
    types: 'Grass',
    price: '750',
    trainer_id: '1',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    category: 'pokemon',
    name: 'Squirtle',
    level: '1',
    types: 'Water',
    price: '750',
    trainer_id: '2',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    category: 'pokemon',
    name: 'Charmander',
    level: '1',
    types: 'Fire',
    price: '750',
    trainer_id: '3',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    category: 'pokemon',
    name: 'Eevee',
    level: '1',
    types: 'Normal',
    price: '1000',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
  },
  {
    category: 'pokemon',
    name: 'Pikachu',
    level: '1',
    types: 'Electric',
    price: '1000',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
  {
    category: 'pokemon',
    name: 'Chikorita',
    level: '1',
    types: 'Grass',
    price: '500',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
  },
  {
    category: 'pokemon',
    name: 'Cyndaquil',
    level: '1',
    types: 'Fire',
    price: '500',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png',
  },
  {
    category: 'pokemon',
    name: 'Totodile',
    level: '1',
    types: 'Water',
    price: '500',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png',
  },
  {
    category: 'pokemon',
    name: 'Treecko',
    level: '1',
    types: 'Grass',
    price: '500',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png',
  },
  {
    category: 'pokemon',
    name: 'Torchic',
    level: '1',
    types: 'Fire',
    price: '500',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png',
  },
  {
    category: 'pokemon',
    name: 'Mudkip',
    level: '1',
    types: 'Water',
    price: '500',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png',
  },
];

const seedCatalog = () => Catalog.bulkCreate(catalogData);

module.exports = seedCatalog;
