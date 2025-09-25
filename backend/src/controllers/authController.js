const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

// Cria usuário normal
const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password || !name)
    return res.status(400).json({ message: "Missing fields" });

  const exists = await User.findOne({ where: { email } });
  if (exists) return res.status(409).json({ message: "Email already in use" });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash, role: "client" }); // sempre client

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.TOKEN_EXPIRES_IN,
  });

  res.status(201).json({
    user: { id: user.id, name: user.name, email: user.email, role: user.role },
    token,
  });
};

// Cria admin (apenas admin logado)
const registerAdmin = async (req, res) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Only admins can create other admins' });
  }

  const { name, email, password } = req.body;
  if (!email || !password || !name) return res.status(400).json({ message: 'Missing fields' });

  const exists = await User.findOne({ where: { email } });
  if (exists) return res.status(409).json({ message: 'Email already in use' });

  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ name, email, password: hash, role: 'admin' });

  res.status(201).json({ user: { id: user.id, name: user.name, email: user.email, role: user.role } });
};

// Login
const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Missing fields' });

  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ message: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: process.env.TOKEN_EXPIRES_IN });
  res.json({ user: { id: user.id, name: user.name, email: user.email, role: user.role }, token });
};

// Exporta todas as funções de uma vez
module.exports = { register, login, registerAdmin };
