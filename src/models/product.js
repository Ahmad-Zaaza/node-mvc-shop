const fs = require("fs");
const path = require("path");
const { rootDir } = require("../helpers/path");

const filePath = path.join(rootDir, "data", "products.json");
const getProductsFromFile = (cb) => {
  fs.readFile(filePath, (err, contents) => {
    if (err) {
      return cb([]);
    }
    return cb(JSON.parse(contents));
  });
};

exports.Product = class Product {
  constructor(title, description, imageUrl, price) {
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.price = price;
  }

  save() {
    getProductsFromFile((products) => {
      const oldProducts = products;
      oldProducts.push(this);
      fs.writeFile(filePath, JSON.stringify(products), (err) => {
        if (err) {
          console.log(err);
        }
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
