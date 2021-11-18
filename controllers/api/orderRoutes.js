const router = require('express').Router();
const { Order } = require('../../models');

// GET all orders
router.get('/', async (req, res) => {
    try {
      const orderData = await Order.findAll();
      res.status(200).json(orderData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newOrder = await Item.create({
            ...req.body,
            trainer_id: req.session.trainer_id,
        });

        res.status(200).json(newOrder);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const orderData = await Order.destroy({
            where: {
                order_id: req.params.id,
                trainer_id: req.session.trainer_id,
            },
        });

        if (!orderData) {
            res.status(404).json({ message: 'No order found with this id!' });
            return;
        }

        res.status(200).json(orderData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
