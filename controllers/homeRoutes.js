const router = require('express').Router();
const { Trainer, Pokemon, Item } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
  try {
    // Get all pokemons and JOIN with trainer data
    const pokemonData = await Pokemon.findAll({
      include: [
        {
          model: Trainer,
          attributes: ['full_name'],
        },
        {
          model: Item,
          attributes: ['item_id','item_name','item_type','price']
        },
      ],
    });

    // Serialize data so the template can read it
    const pokemons = pokemonData.map((pokemon) => pokemon.get({ plain: true }));
    

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      pokemons, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// GET all pokemon
router.get('/pokemon', async (req, res) => {
  try {
    const pokemonData = await Pokemon.findAll();
    res.status(200).json(pokemonData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET all orders
router.get('/orders', async (req, res) => {
  try {
    const orderData = await Order.findAll();
    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all items
router.get('/items', async (req, res) => {
  try {
    const itemData = await Item.findAll();
    res.status(200).json(itemData);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/pokemon/:id', async (req, res) => {
  try {
    const pokemonData = await Pokemon.findByPk(req.params.id, {
      include: [
        {
          model: Trainer,
          attributes: ['full_name'],
        },
      ],
    });

    const pokemon = pokemonData.get({ plain: true });

    res.render('pokemon', {
      ...pokemon,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/items/:id', async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [
        {
          model: Trainer,
          attributes: ['full_name'],
        },
      ],
    });

    const item = itemData.get({ plain: true });

    res.render('item', {
      ...item,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/trainer', withAuth, async (req, res) => {
  try {
    // Find the logged in trainer based on the session ID
    const trainerData = await Trainer.findByPk(req.session.trainer_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Pokemon, Item }],
    });

    const trainer = trainerData.get({ plain: true });

    res.render('trainer', {
      ...trainer,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the trainer is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/trainer');
    return;
  }

  res.render('login');
});

module.exports = router;