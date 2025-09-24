const { User } = require('../models');
const bcrypt = require('bcryptjs');

// Listar todos os usuários (apenas admin)
const getAllUsers = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Não autorizado' });
  }
  try {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar usuários', error: err.message });
  }
};

// Atualizar perfil do próprio usuário ou admin
const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Admin pode atualizar qualquer usuário, cliente só o próprio
    if (req.user.role !== 'admin' && req.user.id !== parseInt(id)) {
      return res.status(403).json({ message: 'Não autorizado' });
    }

    const allowedFields = [
      'name','email','password','phone','smartphone','birthday','cpf','cnpj','cep',
      'street','number','complement','city','state','newsletter'
    ];

    const user = await User.findByPk(id);
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado' });

    // Atualiza apenas os campos permitidos
    for (let field of allowedFields) {
      if (req.body[field] !== undefined) {
        if (field === 'password') {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(req.body.password, salt);
        } else {
          user[field] = req.body[field];
        }
      }
    }

    await user.save();

    // Nunca retorna senha
    const { password, ...userData } = user.toJSON();
    res.json({ message: 'Perfil atualizado com sucesso!', user: userData });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar usuário', error: err.message });
  }
};

module.exports = { getAllUsers, updateUser };
