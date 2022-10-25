const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    user_id : {
        type : String, 
        required : false
    },
    products : [{
        product_id : {
            type : String, 
            required : false
        },
        quantity : {
            type : String, 
            required : false
        }
    }],
    date : {
        type : String, 
        required : false
    },
    total_amount : {
        type : String, 
        required : false
    },
    shipping_method : {
        type : String, 
        required : false
    },
    payment_method : {
        type : String, 
        required : false
    },
    custom_message : {
        type : String, 
        required : false
    },
    status : {
        type : String, 
        required : false
    },
    order_number : {
        type : String, 
        required : false
    }

})


module.exports = new mongoose.model('Order', orderSchema);