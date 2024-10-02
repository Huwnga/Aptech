const Sequelize = require('sequelize');

const sequelize = require('../config/manaemp_db');

// Create database with define model of Sequelize
const Category = sequelize.define('category', {
  // field primary key and type is int
  categoryId: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },

  categoryName: {
    type: Sequelize.STRING(50),
    allowNull: false
  },

  description: {
    type: Sequelize.STRING(100), 
  }
});

module.exports = Category;