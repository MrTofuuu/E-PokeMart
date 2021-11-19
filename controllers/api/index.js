const router = require('express').Router();
const trainerRoutes = require('./trainerRoutes');
const pokemonRoutes = require('./pokemonRoutes');
const itemRoutes = require('./itemRoutes');
const orderRoutes = require('./orderRoutes');
const catalogRoutes = require('./catalogRoutes');

router.use('/trainers', trainerRoutes);
router.use('/items', itemRoutes);
router.use('/pokemon', pokemonRoutes);
router.use('/orders', orderRoutes);
router.use('/catalog', catalogRoutes);

module.exports = router;
