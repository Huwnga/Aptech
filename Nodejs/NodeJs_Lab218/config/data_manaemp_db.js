const manaEmpDb = require('./manaemp_db');
const Category = require('../models/category');
const Products = require('../models/products');

async function createSampleData() {
  Category.findAll()
      .then(cat => {
        if (!cat[0]) {
          Category.create({
            categoryName: 'Áo ngắn tay',
            description: "Mặc thoáng mát mùa hè"
          });

          Category.create({
            categoryName: 'Áo dài tay',
            description: "Mặc ấm áp tiết trời se lạnh"
          });
        }
      });

  Products.findAll()
      .then(pro => {
        if (!pro[0]) {
          Products.create({
            productName: 'Áo thần tượng',
            price: 100000,
            productNumber: 1,
            category_categoryId: 1
          });
          
          Products.create({
            productName: 'Áo cá sấu',
            price: 50000,
            productNumber: 2,
            category_categoryId: 2
          });
        }
      });

  console.log("Dữ liệu mẫu đã được tạo.");
}

const init = (async () => {
  Category.hasMany(Products, { foreignKey: 'category_categoryId' });
  Products.belongsTo(Category, { foreignKey: 'category_categoryId' });

  await manaEmpDb
    .sync()
    .then(() => {
      createSampleData();
    })
    .catch(err => console.log(err));
});


module.exports = {
  init: init
}