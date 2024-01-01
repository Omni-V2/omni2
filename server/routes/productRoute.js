const router = require('express').Router();
const ProductController = require('../controllers/ProductController');
const authenticateToken = require('../middleware/jwtAuthMiddleware');

// POST create a new product
router.post('/products', ProductController.createProduct);


// GET all products
router.get('/products', ProductController.getAllProducts);
router.get('/productss', ProductController.getAllProductss);
// GET a single product by ID
router.get('/products/:id', ProductController.getProductById);

// PUT update a product by ID
router.put('/products/:id', ProductController.updateProductById);

// DELETE a product by ID
router.delete('/products/:id', ProductController.deleteProductById);
//get a produce by userId
router.get('/producs/user/:id',ProductController.getProductWithUserId)
module.exports = router;
