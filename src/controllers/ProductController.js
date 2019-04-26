const Product = require("../models/Product");

class ProductController {
  async listAll(req, res) {
    const { page } = req.query;
    const products = await Product.paginate({}, { page, limit: 10 });

    return res.json(products);
  }

  async store(req, res) {
    const product = await Product.create(req.body);
    return res.json(product);
  }

  async show(req, res) {
    const product = await Product.findById(req.params.id);
    return res.json(product);
  }

  async update(req, res) {
    const product = await Product.findOneAndUpdate(req.params.id, req.body, {
      new: true
    });

    return res.json(product);
  }

  async remove(req, res) {
    await Product.findByIdAndRemove(req.params.id);
    res.send();
  }
}

module.exports = new ProductController();
