const mongoose = require('mongoose');


const productSchema = new mongoose.model({
    prodcut_name : {
        type : String, 
        required : false,
    },
    product_code : {
        type : String, 
        required : false,
    },
    prodcut_image : {
        type : String, 
        required : false
    },
    features : [
        {
            type : String, 
            required : false
        }
    ],
    purity : {
        type : String, 
        required : false,
    },

    price : {
        type : String, 
        required : false,
    },
    reviews : [
        {
            type : String, 
            required : false,
        }
    ],

    

    price : {
        type : String, 
        required : false,
    },
    category : {
        type : String, 
        required : false,
    },
    sub_category : {
        type : String, 
        required : false,
    },

    
})