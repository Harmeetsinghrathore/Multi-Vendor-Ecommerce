const dotenv = require("dotenv");
dotenv.config("backend/.env");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const User = require("../Models/UserModel");

const addUser = async (req, res) => {
  try {
    // encrypt the password first

    console.log("before");
    let HashedPassword;

    bcrypt.genSalt(10, (err, salt) => {
      // console.log(err, 'line 21 userController.js');
      bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
        if (err) {
          console.log(err, "line 21 userController.js");
        } else {
          HashedPassword = hashedPassword;
        }
      });
    });

    // Registering the new user

    const file_name = "http://localhost:8800/images/" + req.file.originalname;

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      avatar: file_name,
    });

    await user.save();

    // Generate access token and refresh token

    res.status(201).json({
      status: "Success",
      Message: "New user created",
      user: user,
    });
  } catch (error) {
    console.log(error, " line 8 userController.js");
    return res.status(500).json({
      status: "Error",
      Message: "Internal server error",
    });
  }
};

const getUserDetail = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        Message: "No user found, please login",
      });
    }

    res.status(200).json({
      Status: "Error",
      Message: "User details fetched successfully",
      user: user,
    });
  } catch (error) {
    console.log(error, " line 8 userController.js");
    return res.status(500).json({
      status: "Error",
      Message: "Internal server error",
    });
  }
};

const editUserDetail = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        status: "error",
        Message: "No user found, please login",
      });
    }

    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    await updatedUser.save();

    res.status(200).json({
      Status: "Success",
      Message: "User details updated successfully",
      updatedUser: updatedUser,
    });
  } catch (error) {
    return res.status(500).json({
      status: "Error",
      Message: "Internal server error",
    });
  }
};

const getUserOrders = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    
    if (!user) {
        return res.status(404).json({
            status: "error",
            Message: "No user found, please login",
        });
    }
    res.status(200).json({
        Status : 'Success',
        Message : 'User orders fetched successfully',
        Orders : user.orders
    })


  } catch (error) {
    return res.status(500).json({
      status: "Error",
      Message: "Internal server error",
    });
  }
};

module.exports = {
  addUser,
  getUserDetail,
  editUserDetail,
  getUserOrders,
};
