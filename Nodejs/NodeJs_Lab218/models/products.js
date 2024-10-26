const Sequelize = require('sequelize');

const sequelize = require('../config/manaemp_db');

// Create database with define model of Sequelize
const Products = sequelize.define('products', {
  // field primary key and type is int
  productId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  productName: {
    type: Sequelize.STRING(50),
    allowNull: false
  },

  price: {
    type: Sequelize.FLOAT,
    allowNull: false
  },

  productNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
  }
});

module.exports = Products;