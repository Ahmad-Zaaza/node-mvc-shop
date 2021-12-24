const express = require("express");
const { renderAllProducts } = require("../controllers/products");
const router = express.Router();
router.get("/", renderAllProducts);

module.exports = router;
