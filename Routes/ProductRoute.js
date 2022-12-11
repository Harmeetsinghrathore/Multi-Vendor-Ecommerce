const Router = require('express').Router();
const ProductController = require('../Controllers/ProductController');


// Product APIs

Router.get('api/get-All-Products', [ProductController.getAllProducts]);



module.exports = Router;

