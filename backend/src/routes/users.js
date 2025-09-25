const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const { getAllUsers, updateUser } = require('../controllers/userController');
const { registerAdmin } = require('../controllers/authController');

// Listar todos usuários (apenas admin)
router.get('/', authMiddleware, getAllUsers);

// Atualizar perfil (próprio usuário ou admin)
router.put('/:id', authMiddleware, updateUser);

// Criar admin (apenas admin pode criar outro admin)
router.post('/register-admin', authMiddleware, registerAdmin);

module.exports = router;
