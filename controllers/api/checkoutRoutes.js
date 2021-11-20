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

module.exports = router;
