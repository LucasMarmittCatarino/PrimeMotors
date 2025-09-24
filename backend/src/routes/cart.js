const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const cartController = require('../controllers/cartController');

router.use(auth);
router.get('/', cartController.getCart);
router.post('/', cartController.addToCart);
router.delete('/:id', cartController.removeFromCart);

module.exports = router;
