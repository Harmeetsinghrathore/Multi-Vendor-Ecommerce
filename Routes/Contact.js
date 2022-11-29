const Router = reqiure('express').Router();
const ContactController = require('../Controllers/ContactController');

Router.post('/add-contact', [ContactController.addContact]);
Router.get('/get-contact', [ContactController.getContact]);
Router.patch('/edit-contact', [ContactController.editContact]);

module.exports = Router;