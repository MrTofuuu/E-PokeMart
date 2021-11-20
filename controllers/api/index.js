const router = require('express').Router();
const trainerRoutes = require('./trainerRoutes');
const orderRoutes = require('./orderRoutes');
const catalogRoutes = require('./catalogRoutes');
const checkoutRoutes = require('./checkoutRoutes');

router.use('/trainers', trainerRoutes);
router.use('/orders', orderRoutes);
router.use('/catalog', catalogRoutes);
router.use('/checkout', checkoutRoutes);

module.exports = router;
