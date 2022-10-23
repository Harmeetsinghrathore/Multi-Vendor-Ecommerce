const dotenv = require('dotenv');
dotenv.config('backend/.env');
const bcrypt = require('bcryptjs');
const nodemailer = require('nodemailer');



const User = require('../Models/UserModel');



const addUser =async(req, res) => {
    try {

        // encrypt the password first
        

        console.log('before');

        bcrypt.genSalt(10, (err, salt) => {
            // console.log(err, 'line 21 userController.js');
            bcrypt.hash(req.body.password, salt, (err, hashedPassword) => {
                if(err){
                    console.log(err, 'line 21 userController.js');
                }else{
                    console.log(hashedPassword, '1');
                    let password = hashedPassword;
                }
            });
        });

        

        // Registering the new user

        const file_name = 'http://localhost:8800/images/' + req.file.originalname;

        const user = new User({
            name : req.body.name,
            email : req.body.email,
            password : password,
            avatar : file_name
        })

        await user.save();


        // Generate access token and refresh token 

        res.status(201).json({
            status : 'Success',
            Message : 'New user created',
            user : user
        })
        
    } catch (error) {
        console.log(error,' line 8 userController.js');
        return res.status(500).json({
            status : 'Error',
            Message : 'Internal server error'
        })
    }
}

module.exports = {
    addUser
}