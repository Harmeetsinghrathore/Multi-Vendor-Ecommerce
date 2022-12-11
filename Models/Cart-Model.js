const { Schema } = require("mongoose");

const mongoose = reqiure('mongoose');

const cartSchema = new mongoose.Schema({
    user_id : {
        type : String,
        required : false
    },
    product_id : [{
        type : Schema.Types.ObjectId,
        required : false
    }]
})

module.exports = new mongoose.model('Cart', cartSchema, 'Cart');