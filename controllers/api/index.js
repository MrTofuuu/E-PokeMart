const router = require('express').Router();
const trainerRoutes = require('./trainerRoutes');
const pokemonRoutes = require('./pokemonRoutes');
const itemRoutes = require('./itemRoutes');
const orderRoutes = require('./orderRoutes');

router.use('/trainers', trainerRoutes);
router.use('/items', itemRoutes);
router.use('/pokemon', pokemonRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
