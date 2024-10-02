const Category = require('../models/category');

exports.getAllCategory = (req, res, next) => {
  Category.findAll()
    .then((categories) => {
      return res.status(200).json({
        error: {
          status: 200,
          message: 'OK'
        },
        data: {
          categories: categories
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

exports.insertCategory = (req, res, next) => {
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

  const name = req.body.categoryName;
  const description = req.body.description;

  if (!(name)) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Don\'t send a emty data!'
      },
      data: {}
    });
  }

  Category.create(
    {
      categoryName: name,
      description: description,
    }
  )
    .then((cate) => {
      if (!cate) {
        return res.status(200).json({
          error: {
            status: 500,
            message: 'Add category fail!'
          },
          data: {}
        });
      }

      return res.status(200).json({
        error: {
          status: 200,
          message: 'Add Category successfully with id:' + cate.categoryId + ' !'
        },
        data: {
          category: cate
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

exports.updateCategory = (async (req, res, next) => {
  const categoryId = req.query.categoryId;

  if (!categoryId) {
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

  const categoryName = req.body.categoryName;
  const description = req.body.description;

  if (!(categoryName)) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Don\'t send a emty data!'
      },
      data: {}
    });
  }

  const exs = await Category.findOne({
    where: {
      categoryId: categoryId
    }
  });

  if (!exs) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Don\'t have a category ?'
      },
      data: {}
    });
  }

  try {
    updCate = {
      categoryName: categoryName,
      description: description
    };

    exs.update(updCate);
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

exports.deleteCategoryById = (async (req, res, next) => {
  const categoryId = req.query.categoryId;

  if (!categoryId) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Where your params ?'
      },
      data: {}
    });
  }

  const exs = await Category.findOne({
    where: {
      categoryId: categoryId
    }
  });

  if (!exs) {
    return res.status(200).json({
      error: {
        status: 500,
        message: 'Don\'t have a category ?'
      },
      data: {}
    });
  }

  try {
    exs.destroy();

    return res.status(200).json({
      error: {
        status: 200,
        message: 'Deleted this Category successfully!'
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