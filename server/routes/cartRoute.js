const router = require('express').Router();
const cartController = require('../controllers/cartController');

// GET all cart items for a specific user
router.get('/cart/:userId', cartController.getAllCart);

// DELETE a cart item for a specific user
router.delete('/cart/:userId/:cartItemId', cartController.deleteCartItem);

// POST create a new cart item
router.post('/cart', cartController.createCart);

module.exports = router;
