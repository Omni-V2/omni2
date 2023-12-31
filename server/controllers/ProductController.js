const Product = require('../database/product.js');

// Create a new product
async function createProduct(req, res) {
  console.log(req.body)
  try {
    const newProduct = await Product.create(req.body);

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
    throw(error)
  }
}

// Get all products
async function getAllProducts(req, res) {
  try {
    const limit = req.query.limit || 0
    const products = await Product.findAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Get a single product by ID
async function getProductById(req, res) {
  try {
    const { id } = req.params;
    const product = await Product.findByPk(id);
    if (!product) {
      res.status(404).json({ message: 'Product not found' });
      return;
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
async function getProductWithUserId(req, res) {
  try {
    const { id } = req.params;
    console.log(id);
    const Prod = await Product.findAll({ where: { UserId: id } });
    res.status(200).json(Prod)
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update a product by ID
async function updateProductById(req, res) {
  try {
    const { id } = req.params;
    const [updated] = await Product.update(req.body, {
      where: { id },
    });
    if (updated) {
      const updatedProduct = await Product.findByPk(id);
      res.json(updatedProduct);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete a product by ID
async function deleteProductById(req, res) {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({
      where: { id },
    });
    if (deleted) {
      res.json({ message: 'Product deleted successfully' });
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProductById,
  deleteProductById,
  getProductWithUserId
};
