const { Pokemon } = require('../models');

const pokemonData = [
  {
    pokemon_id: '1',
    name: 'Bulbasaur',
    level: '1',
    types: 'Grass',
    price: '750',
    trainer_id: '1',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    pokemon_id: '2',
    name: 'Squirtle',
    level: '1',
    types: 'Water',
    price: '750',
    trainer_id: '2',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    pokemon_id: '3',
    name: 'Charmander',
    level: '1',
    types: 'Fire',
    price: '750',
    trainer_id: '3',
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    pokemon_id: '4',
    name: 'Eevee',
    level: '1',
    types: 'Normal',
    price: '1000',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
  },
  {
    pokemon_id: '5',
    name: 'Pikachu',
    level: '1',
    types: 'Electric',
    price: '1000',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
  },
  {
    pokemon_id: '6',
    name: 'Chikorita',
    level: '1',
    types: 'Grass',
    price: '500',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png',
  },
  {
    pokemon_id: '7',
    name: 'Cyndaquil',
    level: '1',
    types: 'Fire',
    price: '500',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png',
  },
  {
    pokemon_id: '8',
    name: 'Totodile',
    level: '1',
    types: 'Water',
    price: '500',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png',
  },
  {
    pokemon_id: '9',
    name: 'Treecko',
    level: '1',
    types: 'Grass',
    price: '500',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png',
  },
  {
    pokemon_id: '10',
    name: 'Torchic',
    level: '1',
    types: 'Fire',
    price: '500',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png',
  },
  {
    pokemon_id: '11',
    name: 'Mudkip',
    level: '1',
    types: 'Water',
    price: '500',
    trainer_id: null,
    sprites:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png',
  },
];

const seedPokemon = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPokemon;
