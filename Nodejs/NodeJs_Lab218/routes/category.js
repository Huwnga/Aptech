const express = require('express');
const routes = express.Router();

const controll = require('../controllers/category');

// account
routes.get('/', controll.getAllCategory);
routes.post('/add', controll.insertCategory);
routes.put('/update', controll.updateCategory);
routes.delete('/delete', controll.deleteCategoryById);

module.exports = routes;