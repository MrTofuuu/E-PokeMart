const router = require('express').Router();
const { Pokemon } = require('../../models');

// GET all pokemon
router.get('/', async (req, res) => {
    try {
      const pokemonData = await Pokemon.findAll();
      res.status(200).json(pokemonData);
    } catch (err) {
      res.status(500).json(err);
    }
});

  
router.post('/', async (req, res) => {
    try {
        const newPokemon = await Pokemon.create({
            ...req.body,
            trainer_id: req.session.trainer_id,
        });

        res.status(200).json(newPokemon);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const pokemonData = await Pokemon.destroy({
            where: {
                pokemon_id: req.params.id,
                trainer_id: req.session.trainer_id,
            },
        });

        if (!pokemonData) {
            res.status(404).json({ message: 'No pokemon found with this id!' });
            return;
        }

        res.status(200).json(pokemonData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
