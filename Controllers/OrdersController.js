const ORDER = require("../Models/OrdersModel");
const USER = require("../Models/UserModel");

// Add to cart controller

const addToCart = async (req, res) => {
  try {
    const user = await USER.findById(req.params.id);
    console.log(req.params.id, "id");
    if (!user) {
      return res.status(404).json({
        Status: "Error",
        Message: "No user found. Please Login",
      });
    }
    // const data = {
    //   product_id: req.body.product_id,
    // };
    user.cart.push(req.body.product_id);

    user.save();

    res.status(200).json({
      Status: "Success",
      // Message : 'Item added to cart successfully'
      Message: "user found successfully",
      user: user.cart,
    });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({
      status: "Error",
      Message: "Internal server error",
      Error: error,
    });
  }
};

// Remove from cart

const removeFromCart = async (req, res) => {
  try {
    const user = await USER.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        Message: "No user found, please login",
      });
    }
    // const data = {
    //     product_id : req.body.product_id
    // }
    console.log(user.cart, "o");

    user.cart.forEach((element) => {
      console.log(element, "great");
      if (element == req.body.product_id) user.cart.remove(element);
    });
    await user.save();

    res.status(200).json({
      Status: "Success",
      Message: "Item removed from cart successfully",
    });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({
      status: "Error",
      Message: "Internal server error",
      Error: error,
    });
  }
};

const getCartItems = async (req, res) => {
  try {
    const user = await USER.findById(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: "error",
        Message: "No user found, please login",
      });
    }

    res.status(200).json({
        Status : 'Success',
        Message : 'Cart items fetched successfully',
        Items : user.cart
    })

  } catch (error) {
    console.log(error, "error");
    return res.status(500).json({
      status: "Error",
      Message: "Internal server error",
      Error: error,
    });
  }
};

module.exports = {
  addToCart,
  removeFromCart,
  getCartItems,
};
