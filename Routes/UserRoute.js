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



module.exports = Router;