const router = require('express').Router();
const { Pokemon } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newPokemon = await PokeMon.create({
            ...req.body,
            user_id: req.session.user_id,
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
                id: req.params.id,
                user_id: req.session.user_id,
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
