exports.get404 = (req, res, next) => {
  res.status(404).json({
    error: {
      status: 404,
      message: 'Page Not Found'
    },
    data: {
      pageTitle: 'Page Not Found',
      path: '404'
    }
  });
};