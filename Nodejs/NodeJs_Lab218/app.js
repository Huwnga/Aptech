// Call library
const path = require('path');
const mysql = require('./config/mysql');
const express = require('express');
const bodyParser = require('body-parser');

// Call database and models
const dataManaEmpDb = require('./config/data_manaemp_db');

// Call Controller
const errorController = require('./controllers/error');

const app = express();

// Call routes
const cateRoutes = require('./routes/category')
const prdRoutes = require('./routes/products');


//  Set library
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, token');
  next();
});

// Use routes
app.use('/category', cateRoutes);
app.use('/product', prdRoutes);
app.use(errorController.get404);

// Relationship mysql
(async () => {
  mysql.query('CREATE DATABASE IF NOT EXISTS \`ManaEmployee\`');
  // add relationship and init data for database
  await dataManaEmpDb.init();

  return app.listen(3000);
})();
