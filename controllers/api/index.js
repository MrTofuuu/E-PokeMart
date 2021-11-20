const router = require('express').Router();
const trainerRoutes = require('./trainerRoutes');
const orderRoutes = require('./orderRoutes');
const catalogRoutes = require('./catalogRoutes');

router.use('/trainers', trainerRoutes);
router.use('/orders', orderRoutes);
router.use('/catalog', catalogRoutes);

module.exports = router;
