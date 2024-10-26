const Sequelize = require('sequelize');
const Category = require('../models/category');
const Products = require('../models/products');

exports.getAllProduct = (req, res, next) => {
  Products.findAll()
    .then((prds) => {
      return res.status(200).json({
        error: {
          status: 200,
          message: 'OK'
        },
        data: {
          products: prds
        }
      });
    })
    .catch(err => {
      return res.status(200).json({
        error: {
          status: 500,
          message: err.toString()
        },
        data: {}
      });
    });
}

exports.insertProduct = async (req, res, next) => {
  const body = req.body;

  if (!body) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Where your body ?'
      },
      data: {}
    });
  }

  const name = req.body.productName;
  const price = req.body.price;
  const productNumber = req.body.productNumber;
  const categoryId = req.body.categoryId;

  if (!(name && price && productNumber && categoryId)) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Don\'t send a emty data!'
      },
      data: {}
    });
  }

  const exsCate = await Category.findOne({
    where: {
      categoryId: categoryId
    }
  });

  if (!exsCate) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Don\'t have a Category ?'
      },
      data: {}
    });
  }

  Products.create(
    {
      productName: name,
      price: price,
      productNumber: productNumber,
      category_categoryId: categoryId
    }
  )
    .then((prd) => {
      if (!prd) {
        return res.status(200).json({
          error: {
            status: 500,
            message: 'Add product fail!'
          },
          data: {}
        });
      }

      return res.status(200).json({
        error: {
          status: 200,
          message: 'Add Product successfully with id:' + prd.productId + ' !'
        },
        data: {
          product: prd
        }
      });
    })
    .catch(err => {
      return res.status(200).json({
        error: {
          status: 500,
          message: err.toString()
        },
        data: {}
      });
    });
}

exports.updateProduct = (async (req, res, next) => {
  const productId = req.query.productId;

  if (!productId) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Where your params ?'
      },
      data: {}
    });
  }

  const body = req.body;

  if (!body) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Where your body ?'
      },
      data: {}
    });
  }

  const name = req.body.productName;
  const price = req.body.price;
  const productNumber = req.body.productNumber;
  const categoryId = req.body.categoryId;

  if (!(name && price && productNumber && categoryId)) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Don\'t send a emty data!'
      },
      data: {}
    });
  }

  const exsCate = await Category.findOne({
    where: {
      categoryId: categoryId
    }
  });

  if (!exsCate) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Don\'t have a Category ?'
      },
      data: {}
    });
  }

  const exs = await Products.findOne({
    where: {
      productId: productId
    }
  });

  if (!exs) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Don\'t have a Product ?'
      },
      data: {}
    });
  }

  try {
    updPrd = {
      productName: name,
      price: price,
      productNumber: productNumber,
      category_categoryId: categoryId
    };

    exs.update(updPrd);
    exs.save();

    return res.status(200).json({
      error: {
        status: 200,
        message: 'Update Category successfully!'
      },
      data: {
        category: exs
      }
    });
  } catch (err) {
    return res.status(400).json({
      error: {
        status: 400,
        message: err.toString()
      },
      data: {}
    });
  }
});

exports.deleteProductById = (async (req, res, next) => {
  const productId = req.query.productId;

  if (!productId) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Where your params ?'
      },
      data: {}
    });
  }

  const exs = await Products.findOne({
    where: {
      productId: productId
    }
  });

  if (!exs) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Don\'t have a Product ?'
      },
      data: {}
    });
  }

  try {
    exs.destroy();

    return res.status(200).json({
      error: {
        status: 200,
        message: 'Deleted this Product successfully!'
      },
      data: {}
    });
  } catch (err) {
    return res.status(400).json({
      error: {
        status: 400,
        message: err.toString()
      },
      data: {}
    });
  }
});

exports.searchProducts = (async (req, res, next) => {
  const strsearch = req.query.strsearch;

  Products.findAll({
    where: {
      [Sequelize.Op.or]: [
        { productName: { [Sequelize.Op.like]: `%${strsearch}%` } },
        { price: { [Sequelize.Op.like]: `%${strsearch}%` } }
      ]
    },
    include: [Category]
  })
    .then(products => res.json(products))
    .catch(err => res.status(500).json({ error: err.message }));
});
