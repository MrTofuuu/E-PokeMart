const router = require('express').Router();
const { Catalog } = require('../../models');

// // GET all items from Catalog
// router.get('/', async (req, res) => {
//   try {
//     const catalogData = await Catalog.findAll();
//     res.status(200).json(catalogData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.post('/', async (req, res) => {
  try {
    const newCatalog = await Catalog.update({
      ...req.body,
      trainer_id: req.session.trainer_id,
    });

    res.status(200).json(newCatalog);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const catalogData = await Catalog.destroy({
      where: {
        pokemon_id: req.params.id,
        trainer_id: req.session.trainer_id,
      },
    });

    if (!catalogData) {
      res.status(404).json({ message: 'No catalog item found with this id!' });
      return;
    }

    res.status(200).json(catalogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
