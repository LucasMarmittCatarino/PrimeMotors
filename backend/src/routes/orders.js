const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const requireRole = require('../middlewares/roleMiddleware');
const orderController = require('../controllers/orderController');

router.post('/checkout', auth, orderController.checkout);
router.get('/my', auth, orderController.getMyOrders);
router.get('/', auth, requireRole('admin'), orderController.getAllOrders);

module.exports = router;
