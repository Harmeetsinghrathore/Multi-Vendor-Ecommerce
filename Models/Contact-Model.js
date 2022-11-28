const { default: mongoose } = require('mongoose');
const Mongoose = require('mongoose');

const contactSchema = new Mongoose.Schema({
    email : {
        type : String, 
        required : false
    },
    phone : {
        type : String,
        required : false
    },
    address : {
        type : String, 
        required : false
    }
})

module.exports = new mongoose.model("contact", contactSchema, 'contact-schema');