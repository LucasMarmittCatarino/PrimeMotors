const { User } = require('../models');
const bcrypt = require('bcryptjs');

// Listar todos os usuários (apenas admin)
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar usuários', error: err.message });
  }
};

// Atualizar perfil do próprio usuário
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Admin pode atualizar qualquer user, cliente só o próprio id
    if (req.user.role !== 'admin' && req.user.id !== parseInt(id)) {
      return res.status(403).json({ message: 'Não autorizado' });
    }

    const { name, email, password } = req.body;
    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    if (name) user.name = name;
    if (email) user.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();

    // nunca retorna senha
    const { password: _, ...userData } = user.toJSON();
    res.json(userData);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar usuário', error: err.message });
  }
};

module.exports = { getAllUsers, updateUser };
