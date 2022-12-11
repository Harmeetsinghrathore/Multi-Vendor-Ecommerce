const mongoose = require('mongoose');
const Products = require('../Models/ProductModel');



exports.getAllProducts = async(req, res) => {
    try {

        res.send('Route is working !')


        
    } catch (error) {

        res.status(500).json({
            Status : 'Error',
            Messsge : 'Internal Server Error',
            Error : error
        })
        
    }
}

