const express = require("express");
const app = express.Router();
const productController = require('../controllers/productController')

app.get("/", productController.getProducts);

app.get("/:id", productController.getProductById);

app.get("/name/:name",  productController.getProductByName);

app.get("/price/:price",productController.getProductPrice);

// =======================================================================================
app.post("/", productController.getProductAdd);

// =======================================================================================

app.put(":id",productController.getProductPut);

// =======================================================================================

app.patch(":id", productController.getProductPatch);

// =======================================================================================

app.delete("/:id",productController.getProductDelete);

module.exports = app;

