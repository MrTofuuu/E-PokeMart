const router = require('express').Router();
const { Item } = require('../../models');

// GET all items
router.get('/', async (req, res) => {
    try {
      const itemData = await Item.findAll();
      res.status(200).json(itemData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newItem = await Item.create({
            ...req.body,
            trainer_id: req.session.trainer_id,
        });

        res.status(200).json(newItem);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const itemData = await Item.destroy({
            where: {
                item_id: req.params.id,
                trainer_id: req.session.trainer_id,
            },
        });

        if (!itemData) {
            res.status(404).json({ message: 'No item found with this id!' });
            return;
        }

        res.status(200).json(itemData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
