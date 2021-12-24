const express = require("express");
const {
  renderCart,
  renderIndex,
  renderCheckout,
} = require("../controllers/shop");
const { renderAllProducts } = require("../controllers/products");
const router = express.Router();
router.get("/", renderIndex);
router.get("/products", renderAllProducts);
router.get("/cart", renderCart);
router.get("/checkout", renderCheckout);

module.exports = router;
