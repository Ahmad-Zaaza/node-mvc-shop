const express = require("express");
const { renderAddProduct, addNewProduct,renderAdminProducts } = require("../controllers/products");
const router = express.Router();

router.get("/add-product", renderAddProduct);
router.get("/products", renderAdminProducts);
router.post("/add-product", addNewProduct);

module.exports = router