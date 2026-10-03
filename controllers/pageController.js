const { newProducts, topProducts, slides } = require('../models/productModel');

exports.home = (req, res) => {
  res.render('layout', {
    title: 'Trang chủ — Bánh ngọt',
    newProducts,
    topProducts,
    slides
  });
};

exports.about = (req, res) => {
  res.render('about');
};

exports.product = (req, res) => {
  res.render('product');
};

exports.contact = (req, res) => {
  res.render('contact');
};