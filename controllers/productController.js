const { newProducts, topProducts, slides } = require('../models/productModel');

exports.getHomePage = (req, res) => {
  res.render('layout', {
    title: 'Trang chủ — Bánh ngọt',
    newProducts,
    topProducts,
    slides
  });
};
