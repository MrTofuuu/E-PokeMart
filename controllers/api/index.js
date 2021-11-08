const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./pokeRoutes');

router.use('/users', userRoutes);
router.use('/pokemon', pokeRoutes);

module.exports = router;
