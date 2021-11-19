const router = require('express').Router();
const { Trainer, Pokemon, Item, Order } = require('../models');
const withAuth = require('../utils/auth');

// render hompage 
router.get('/', async (req, res) => {
  try {
    // // Get all pokemons and JOIN with trainer data
    // const pokemonData = await Pokemon.findAll({
    //   include: [
    //     {
    //       model: Trainer,
    //       attributes: ['full_name'],
    //     },
    //     {
    //       model: Item,
    //       attributes: ['item_id','item_name','item_type','price']
    //     },
    //   ],
    // });

    // // Serialize data so the template can read it
    // const pokemons = pokemonData.map((pokemon) => pokemon.get({ plain: true }));
    

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      // pokemons, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// render GET all pokemon
router.get('/pokemon', async (req, res) => {
  try {
    const pokemonData = await Pokemon.findAll();
    const pokemons = pokemonData.map((pokemon) => pokemon.get({ plain: true }));

    res.render('pokemon', {
      ...pokemons,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render GET all orders
router.get('/orders', async (req, res) => {
  try {
    const orderData = await Order.findAll();
    const orders = orderData.map((order) => order.get({ plain: true }));

    res.render('order', {
      ...orders,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render GET all items
router.get('/items', async (req, res) => {
  try {
    const itemData = await Item.findAll();
    const items = itemData.map((item) => item.get({ plain: true }));

    res.render('item', {
      ...items,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// render by pokemon id 
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

    res.render('items', {
      ...item,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in trainer based on the session ID
    const trainerData = await Trainer.findByPk(req.session.trainer_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Pokemon, Item }],
    });

    const trainer = trainerData.get({ plain: true });

    res.render('profile', {
      ...trainer,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  console.log("this is inside of login route")
  // If the trainer is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;