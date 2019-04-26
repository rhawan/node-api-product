const express = require("express");

const routes = express.Router();

const ProductController = require("./controllers/ProductController");

routes.get("/products", ProductController.listAll);
routes.get("/products/:id", ProductController.show);
routes.post("/products", ProductController.store);
routes.put("/products/:id", ProductController.update);
routes.delete("/products/:id", ProductController.remove);

module.exports = routes;
