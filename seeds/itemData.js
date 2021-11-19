const { Item } = require('../models');

const itemData = [
  {
    item_id: '1',
    name: 'Master ball',
    types: 'pokeball',
    price: '1000',
    trainer_id: '1',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/master-ball.png',
  },
  {
    item_id: '2',
    name: 'Awakening',
    types: 'Medical item',
    price: '10',
    trainer_id: '2',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/awakening.png',
  },
  {
    item_id: '3',
    name: 'Paralyze-heal',
    types: 'Medical item',
    price: '10',
    trainer_id: '3',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/paralyze-heal.png',
  },
  {
    item_id: '4',
    name: 'full-restore',
    types: 'Medical item',
    price: '15',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-restore.png',
  },
  {
    item_id: '5',
    name: 'max-potion',
    types: 'Medical item',
    price: '13',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-potion.png',
  },
  {
    item_id: '6',
    name: 'hyper-potion',
    types: 'Medical item',
    price: '12',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/hyper-potion.png',
  },
  {
    item_id: '7',
    name: 'super-potion',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/super-potion.png',
  },
  {
    item_id: '8',
    name: 'Ultra Ball',
    types: 'pokeball',
    price: '15',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ultra-ball.png',
  },
  {
    item_id: '9',
    name: 'Great ball',
    types: 'pokeball',
    price: '13',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png',
  },
  {
    item_id: '10',
    name: 'Poke ball',
    types: 'pokeball',
    price: '5',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png',
  },
  {
    item_id: '11',
    name: 'Potion',
    types: 'Medical item',
    price: '5',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/potion.png',
  },
  {
    item_id: '12',
    name: 'Full heal',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/full-heal.png',
  },
  {
    item_id: '13',
    name: 'Revive',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/revive.png',
  },
  {
    item_id: '14',
    name: 'Max revive',
    types: 'Medical item',
    price: '20',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/max-revive.png',
  },
  {
    item_id: '15',
    name: 'X Attack',
    types: 'Battle item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/x-attack.png',
  },
  {
    item_id: '16',
    name: 'X Defense',
    types: 'Battle item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/x-defense.png',
  },
  {
    item_id: '17',
    name: 'X Speed',
    types: 'Battle item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/x-speed.png',
  },
  {
    item_id: '18',
    name: 'X Special attack',
    types: 'Battle item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/x-sp-atk.png',
  },
  {
    item_id: '19',
    name: 'Burn heal',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/burn-heal.png',
  },
  {
    item_id: '20',
    name: 'Ice heal',
    types: 'Medical item',
    price: '10',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/ice-heal.png',
  },
];

const seedItems = () => Item.bulkCreate(itemData);

module.exports = seedItems;
