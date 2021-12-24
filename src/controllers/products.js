const { Product } = require("../models/product");

const renderAllProducts = (_, res) => {
  Product.fetchAll((prods) => {
    res.render("shop/products-list", {
      pageTitle: "Shop",
      prods,
      path: "/products",
    });
  });
};
const renderAdminProducts = (_, res) => {
  Product.fetchAll((prods) => {
    res.render("admin/products-list", {
      pageTitle: "Products - Admin",
      prods,
      path: "/admin/products",
    });
  });
};
const renderAddProduct = (_, res) => {
  res.render("admin/add-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
  });
};
const addNewProduct = (req, res) => {
  const { title, imageUrl, price, description } = req.body;
  const product = new Product(title, description, imageUrl, price);
  product.save();
  res.redirect("/");
};

module.exports = {
  renderAllProducts,
  renderAddProduct,
  addNewProduct,
  renderAdminProducts,
};
