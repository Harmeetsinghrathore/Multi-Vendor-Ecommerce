const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : {
        type : String, 
        required : false
    },

    email : {
        type : String, 
        required : false
    },
    password : {
        type : String, 
        required : false
    },
    avatar : {
        type : String, 
        required : false
    },
    isAdmin : {
        type : Boolean, 
        required : false
    }

})


module.exports = new mongoose.model('User', userSchema);