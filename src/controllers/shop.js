const { Product } = require("../models/product");

const renderIndex = (_, res) => {
  Product.fetchAll((prods) => {
    res.render("shop/index", {
      pageTitle: "Shop",
      prods,
      path: "/",
    });
  });
};

const renderCart = (_, res) => {
  res.render("shop/cart.ejs", { path: "/cart", pageTitle: "Cart" });
};
const renderCheckout = (_, res) => {
  res.render("shop/checkout.ejs", { path: "/checkout", pageTitle: "Checkout" });
};

module.exports = {
  renderCart,
  renderIndex,
  renderCheckout,
};
