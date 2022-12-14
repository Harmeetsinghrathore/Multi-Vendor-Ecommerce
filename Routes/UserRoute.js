const express = require('express');
const Router = express.Router();
const multer = require('multer');

// Multer configuration

const fileStorageEngine = multer.diskStorage({
    destination : (req, file, callback) => {
        const abs_path = __dirname + 'public\\images';
        const abs_path_ = abs_path.replace('Routes', "");
        callback(null, abs_path_);
    },

    filename : (req, file, callback) => {
        callback(null, file.originalname);
    }
})

const upload = multer({storage : fileStorageEngine});





// Controllers

const userController = require('../Controllers/UserController');


// APIs

Router.route('/api/add-user').post(upload.single('avatar'), userController.addUser);


Router.route('/api/get-user-detail/:id').get(userController.getUserDetail);
Router.route('/api/edit-user-detail/:id').patch(userController.editUserDetail);
Router.route('/api/get-user-orders/:id').get(userController.getUserOrders);




module.exports = Router;