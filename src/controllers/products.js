const { Product } = require("../models/product");

const renderAllProducts = (_, res) => {
  Product.fetchAll((prods) => {
    res.render("shop", {
      pageTitle: "Shop",
      prods,
      path: "/",
    });
  });
};
const renderAddProduct = (_, res) => {
  res.render("add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
  });
};
const addNewProduct = (req, res) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

module.exports = {
  renderAllProducts,
  renderAddProduct,
  addNewProduct,
};
