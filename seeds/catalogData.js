const { Catalog } = require('../models');

const catalogData = [
  {
    id: '1',
    category: 'item',
    item_name: 'Master ball',
    item_types: 'pokeball',
    item_price: '1000',
    trainer_id: '1',
    item_sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png',
  },
  {
    id: '2',
    category: 'item',
    name: 'Awakening',
    types: 'Medical item',
    price: '10',
    trainer_id: '2',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/awakening.png',
  },
  {
    id: '3',
    category: 'item',
    name: 'Paralyze-heal',
    types: 'Medical item',
    price: '10',
    trainer_id: '3',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/paralyze-heal.png',
  },
  {
    id: '4',
    category: 'item',
    name: 'full-restore',
    types: 'Medical item',
    price: '15',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-restore.png',
  },
  {
    id: '5',
    category: 'item',
    name: 'max-potion',
    types: 'Medical item',
    price: '13',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-potion.png',
  },
  {
    id: '6',
    category: 'item',
    name: 'hyper-potion',
    types: 'Medical item',
    price: '12',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png',
  },
  {
    id: '7',
    category: 'item',
    name: 'super-potion',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png',
  },
  {
    id: '8',
    category: 'item',
    name: 'Ultra Ball',
    types: 'pokeball',
    price: '15',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png',
  },
  {
    id: '9',
    category: 'item',
    name: 'Great ball',
    types: 'pokeball',
    price: '13',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png',
  },
  {
    id: '10',
    category: 'item',
    name: 'Poke ball',
    types: 'pokeball',
    price: '5',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
  },
  {
    id: '11',
    category: 'item',
    name: 'Potion',
    types: 'Medical item',
    price: '5',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png',
  },
  {
    id: '12',
    category: 'item',
    name: 'Full heal',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-heal.png',
  },
  {
    id: '13',
    category: 'item',
    name: 'Revive',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/revive.png',
  },
  {
    id: '14',
    category: 'item',
    name: 'Max revive',
    types: 'Medical item',
    price: '20',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-revive.png',
  },
  {
    id: '15',
    category: 'item',
    name: 'X Attack',
    types: 'Battle item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/x-attack.png',
  },
  {
    id: '16',
    category: 'item',
    name: 'X Defense',
    types: 'Battle item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/x-defense.png',
  },
  {
    id: '17',
    category: 'item',
    name: 'X Speed',
    types: 'Battle item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/x-speed.png',
  },
  {
    id: '18',
    category: 'item',
    name: 'X Special attack',
    types: 'Battle item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/x-sp-atk.png',
  },
  {
    id: '19',
    category: 'item',
    name: 'Burn heal',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/burn-heal.png',
  },
  {
    id: '20',
    category: 'item',
    name: 'Ice heal',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-heal.png',
  },
  {
    id: '21',
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
    id: '22',
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
    id: '23',
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
    id: '24',
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
    id: '25',
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
    id: '26',
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
    id: '27',
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
    id: '28',
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
    id: '29',
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
    id: '30',
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
    id: '31',
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

const seedItems = () => Item.bulkCreate(catalogData);

module.exports = seedItems;
