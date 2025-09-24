const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const auth = require('../middlewares/authMiddleware');
const requireRole = require('../middlewares/roleMiddleware');

router.get('/', productController.list); // pública
router.get('/:id', productController.getById); // pública

// rotas admin
router.post('/', auth, requireRole('admin'), productController.create);
router.put('/:id', auth, requireRole('admin'), productController.update);
router.delete('/:id', auth, requireRole('admin'), productController.remove);

module.exports = router;
