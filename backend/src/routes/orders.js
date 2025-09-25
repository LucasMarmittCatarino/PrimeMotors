const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const requireRole = require('../middlewares/roleMiddleware');
const orderController = require('../controllers/orderController');

// usuário final
router.use(auth);
router.post('/checkout', orderController.checkout);
router.get('/my-orders', orderController.getMyOrders);

// admin
router.get('/', requireRole('admin'), orderController.getAllOrders);

module.exports = router;
