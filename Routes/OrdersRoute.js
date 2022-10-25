const express = require('express');
const Router = express.Router();

// Controllers
const OrdersController = require('../Controllers/OrdersController');


// APIs

// Cart APIs

Router.route('/api/add-item-to-cart/:id').post(OrdersController.addToCart);
Router.route('/api/remove-from-cart/:id').post(OrdersController.removeFromCart);
Router.route('/api/get-cart-items/:id').get(OrdersController.getCartItems);

// Order APIs

Router.route('/api/add-order').post(OrdersController.addOrder);
Router.route('/api/')



module.exports = Router;