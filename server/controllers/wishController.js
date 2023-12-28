const Wishlist= require('../database/wishList.js');
const Product = require('../database/product.js');
const User = require('../database/User.js');
// async function getWishById(req, res) {
//     try {
//       const { id } = req.params;
      
//       const wish = await Wishlist.findAll({
//         where: {
//             UserId: id,
//           },
//           include: [
//             { model: User },
//             { model: Product },
//           ],
//       });
//       console.log("wish",wish);
//       if (!wish || wish.length === 0) {
//         console.log('No wishes found for UserId:', id);
//         return res.status(404).json({ message: 'No wishes found' });
//       }
//       res.json(wish);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   }
  async function getWishById(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const Wishes = await Wishlist.findAll({ where: { UserId: id } });
      res.status(200).json(Wishes)
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async function createWish(req, res) {
    try {
      const newWish= await Wishlist.create(req.body);
      res.status(201).json(newWish);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  module.exports = {
    getWishById,
    createWish
  };
