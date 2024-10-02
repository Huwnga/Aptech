const express = require('express');
const routes = express.Router();

const controll = require('../controllers/products');

// account
routes.get('/', controll.getAllProduct);
routes.post('/add', controll.insertProduct);
routes.put('/update', controll.updateProduct);
routes.delete('/delete', controll.deleteProductById);

module.exports = routes;