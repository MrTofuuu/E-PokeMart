const { Pokemon } = require('../models');

const pokemonData = [
  {
    pokemon_id: '1',
    pokemon_name: 'Bulbasaur',
    pokemon_level: '1',
    pokemon_type: 'Grass',
    price: '2',
    trainer_id: '1',
  },
  {
    pokemon_id: '2',
    pokemon_name: 'Squirtle',
    pokemon_level: '1',
    pokemon_type: 'Water',
    price: '2',
    trainer_id: '2',
  },
  {
    pokemon_id: '3',
    pokemon_name: 'Charmander',
    pokemon_level: '1',
    pokemon_type: 'Fire',
    price: '2',
    trainer_id: '3',
  },
  {
    pokemon_id: '4',
    pokemon_name: 'Eevee',
    pokemon_level: '1',
    pokemon_type: 'Normal',
    price: '2',
    trainer_id: null,
  },
  {
    pokemon_id: '5',
    pokemon_name: 'Pikachu',
    pokemon_level: '1',
    pokemon_type: 'Electric',
    price: '2',
    trainer_id: null,
  },
  {
    pokemon_id: '6',
    pokemon_name: 'Chikorita',
    pokemon_level: '1',
    pokemon_type: 'Grass',
    price: '2',
    trainer_id: null,
  },
  {
    pokemon_id: '7',
    pokemon_name: 'Cyndaquil',
    pokemon_level: '1',
    pokemon_type: 'Fire',
    price: '2',
    trainer_id: null,
  },
  {
    pokemon_id: '8',
    pokemon_name: 'Totodile',
    pokemon_level: '1',
    pokemon_type: 'Water',
    price: '2',
    trainer_id: null,
  },
  {
    pokemon_id: '9',
    pokemon_name: 'Treecko',
    pokemon_level: '1',
    pokemon_type: 'Grass',
    price: '2',
    trainer_id: null,
  },
  {
    pokemon_id: '10',
    pokemon_name: 'Torchic',
    pokemon_level: '1',
    pokemon_type: 'Fire',
    price: '2',
    trainer_id: null,
  },
  {
    pokemon_id: '11',
    pokemon_name: 'Mudkip',
    pokemon_level: '1',
    pokemon_type: 'Water',
    price: '2',
    trainer_id: null,
  },
];

const seedPokemon = () => Pokemon.bulkCreate(pokemonData);

module.exports = seedPokemon;
