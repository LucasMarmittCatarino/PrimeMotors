const express = require('express');
const router = express.Router();
const { getAllUsers, updateUser } = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');
const authenticate = require('../middlewares/authMiddleware');

// Listar todos usuários (apenas admin)

router.get('/', authMiddleware, getAllUsers);

// Atualizar perfil (próprio usuário ou admin)
router.put('/:id', authenticate, updateUser);

module.exports = router;
