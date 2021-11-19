const router = require('express').Router();
const { Trainer, Pokemon, Item, Order } = require('../models');
const withAuth = require('../utils/auth');

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
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET all pokemon for homepage
router.get('/', async (req, res) => {
  console.log('pokemon');
  try {
    const pokemonData = await Pokemon.findByPk(req.params.id, {
      include: [
        {
          model: Pokemon,
          attributes: [
            'pokemon_name',
            'pokemon_type',
            'pokemon_level',
            'price',
          ],
        },
      ],
    });

    const pokemons = pokemonData.map((pokemon) => pokemon.get({ plain: true }));

    res.render('/pokemon', {
      pokemons,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//---------
router.get('/:id', async (req, res) => {
  try {
    const pokemonData = await Pokemon.findByPk(req.params.id, {
      include: [
        {
          model: Pokemon,
          attributes: [
            'pokemon_name',
            'pokemon_type',
            'pokemon_level',
            'price',
          ],
        },
      ],
    });

    const pokemons = pokemonData.get({ plain: true });

    res.render('pokemon', { pokemons });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//---------
// GET all orders
router.get('/', async (req, res) => {
  console.log('item');
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [
        {
          model: Item,
          attributes: ['item_name', 'item_type', 'price'],
        },
      ],
    });

    const items = itemData.map((item) => item.get({ plain: true }));

    res.render('/items', {
      items,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//---------
router.get('/:id', async (req, res) => {
  try {
    const itemData = await Item.findByPk(req.params.id, {
      include: [
        {
          model: Item,
          attributes: ['item_name', 'item_type', 'price'],
        },
      ],
    });

    const items = itemData.get({ plain: true });

    res.render('item', { items });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
//---
//get all orders
router.get('/', async (req, res) => {
  console.log('order');
  try {
    const orderData = await Order.findByPk(req.params.id, {
      include: [
        {
          model: Item,
          attributes: [
            'order_id',
            'order_date',
            'order_status',
            'order_quantity',
          ],
        },
      ],
    });

    const orders = orderData.map((item) => item.get({ plain: true }));

    res.render('/orders', {
      orders,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//---------
router.get('/:id', async (req, res) => {
  try {
    const orderData = await Item.findByPk(req.params.id, {
      include: [
        {
          model: Order,
          attributes: [
            'order_id',
            'order_date',
            'order_status',
            'order_quantity',
          ],
        },
      ],
    });

    const orders = orderData.get({ plain: true });

    res.render('orders', { orders });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//---

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
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  console.log('this is inside of login route');
  // If the trainer is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
