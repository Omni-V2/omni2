const router = require('express').Router();
const wishController = require('../controllers/wishController');


router.get('/wish/:id', wishController.getWishById);
router.post('/addwish', wishController.createWish);

module.exports = router;
