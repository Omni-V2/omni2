const Cart = require('../database/cart.js');

async function getAllCart(req, res) {
    try {
      const { userId } = req.params;
      const cartItems = await Cart.findAll({ where: { UserId: userId } });
      res.json(cartItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  

  async function deleteCartItem(req, res) {
    try {
      const { userId, cartItemId } = req.params;
      const cartItem = await Cart.findOne({
        where: {
          id: cartItemId,
          UserId: userId,
        },
      });
      if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found for this user' });
      }
      await Cart.destroy({
        where: {
          id: cartItemId,
          UserId: userId,
        },
      });
  
      res.json({ message: 'Cart item deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function createCart(req, res) {
    try {
      const cartData = req.body;
      const newCart = await Cart.create(cartData);
      res.status(201).json(newCart);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  

  module.exports = {
    getAllCart,
    deleteCartItem,
    createCart
  };