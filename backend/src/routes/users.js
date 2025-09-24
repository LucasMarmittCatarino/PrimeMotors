const express = require('express');
const router = express.Router();
const { getAllUsers, updateUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

// Listar todos usuários (apenas admin)
router.get('/', authMiddleware, getAllUsers);

// Atualizar perfil (próprio usuário ou admin)
router.put('/:id', authMiddleware, updateUser);

module.exports = router;
