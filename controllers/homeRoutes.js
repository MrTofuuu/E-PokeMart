const router = require('express').Router();
const { Trainer, Catalog, Order } = require('../models');
const withAuth = require('../utils/auth');

// render hompage
router.get('/', async (req, res) => {
  try {
    // render homepage
    res.render('homepage', {
      logged_in: req.session.logged_in,
    });
    console.log(req.session);
    
  } catch (err) {
    res.status(500).json(err);
  }
});
// render hompage
router.get('/trading', async (req, res) => {
  try {
    // render homepage
    res.render('trading', {
      logged_in: req.session.logged_in,
    });
    console.log(req.session);
    
  } catch (err) {
    res.status(500).json(err);
  }
});
// render GET all full catalog of available items
router.get('/catalog', async (req, res) => {
  try {
    const catalogData = await Catalog.findAll({
      where:{
        trainer_id:null,
      }
    });
    const catalogs = catalogData.map((catalog) => catalog.get({ plain: true }));

    res.render('catalog', {
      catalogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// render get all pokemon
router.get('/pokemon', async (req, res) => {
  try {
    const pokemonData = await Catalog.findAll({
      where: {
        category: 'pokemon',
        trainer_id:null,
      },
    });
    const pokemons = pokemonData.map((pokemon) => pokemon.get({ plain: true }));

    res.render('pokemon', {
      pokemons,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
//render get all items
router.get('/items', async (req, res) => {
  try {
    const itemsData = await Catalog.findAll({
      where: {
        category: 'item',
        trainer_id:null,
      },
    });
    const items = itemsData.map((items) => items.get({ plain: true }));

    res.render('items', {
      items,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
// render GET all orders
router.get('/order', async (req, res) => {
  try {
    const orderData = await Order.findAll();
    const orders = orderData.map((order) => order.get({ plain: true }));

    res.render('order', {
      orders,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render GET all full catalog
router.get('/checkout', async (req, res) => {
  try {
    const catalogData = await Catalog.findAll();
    const catalogs = catalogData.map((catalog) => catalog.get({ plain: true }));

    res.render('checkout', {
      catalogs,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render by pokemon or item id
router.get('/catalog/:id', async (req, res) => {
  try {
    const catalogData = await Catalog.findByPk(req.params.id, {
      include: [
        {
          model: Trainer,
          attributes: ['full_name'],
        },
      ],
    });

    const catalog = catalogData.get({ plain: true });

    res.render('catalog', {
      catalog,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    console.log("req session console log")
    console.log(req.session.trainer_id);
    // Find the logged in trainer based on the session ID
    const trainerData = await Trainer.findByPk(req.session.trainer_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Catalog }],
    });

    const trainer = trainerData.get({ plain: true });
    const {catalogs}=trainer;
    // console.log(trainer);
    console.log(catalogs);
    res.render('profile', {
      trainer,
      catalogs,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// render login screen
router.get('/login', (req, res) => {
  console.log('this is inside of login route');
  console.log(req.session)
  // If the trainer is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
