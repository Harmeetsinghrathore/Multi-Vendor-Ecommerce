const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },

  email: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  isAdmin: {
    type: Boolean,
    required: false,
  },
  orders: [
    {
      order_id: {
        type: String,
        required: false,
      },
    },
  ],
  cart : [
    {
        type : String, 
        required : false
    }
  ]
});

module.exports = new mongoose.model("User", userSchema);
