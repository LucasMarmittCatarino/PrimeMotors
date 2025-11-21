const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');
const auth = require('../middlewares/authMiddleware');
const requireRole = require('../middlewares/roleMiddleware');

router.get('/', supplierController.list); // pública
router.get('/:id', supplierController.getById); // pública

// rotas admin
router.post('/', auth, requireRole('admin'), supplierController.create);
router.put('/:id', auth, requireRole('admin'), supplierController.update);
router.delete('/:id', auth, requireRole('admin'), supplierController.remove);

module.exports = router;
