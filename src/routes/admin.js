const express = require("express");
const { renderAddProduct, addNewProduct } = require("../controllers/products");
const router = express.Router();

router.get("/add-product", renderAddProduct);
router.post("/add-product", addNewProduct);

module.exports = router