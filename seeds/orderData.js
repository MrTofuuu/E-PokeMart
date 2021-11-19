const { Order } = require('../models');

const orderData = [
  {
    order_id: '1',
    trainer_id: '1',
    order_date: '11/14/2021',
    order_status: 'Shipped',
    order_quantity: '1',
  },
  {
    order_id: '2',
    trainer_id: '2',
    order_date: '11/14/2021',
    order_status: 'Shipped',
    order_quantity: '2',
  },
  {
    order_id: '3',
    trainer_id: '3',
    order_date: '11/14/2021',
    order_status: 'Delivered',
    order_quantity: '3',
  },
];

const seedOrders = () => Order.bulkCreate(orderData);

module.exports = seedOrders;
