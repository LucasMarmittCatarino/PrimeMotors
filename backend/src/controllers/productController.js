const { Product } = require('../models');

const list = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

const getById = async (req, res) => {
  const p = await Product.findByPk(req.params.id);
  if (!p) return res.status(404).json({ message: 'Product not found' });
  res.json(p);
};

const create = async (req, res) => {
  const { title, description, price, stock, imageUrl } = req.body;
  const p = await Product.create({ title, description, price, stock, imageUrl });
  res.status(201).json(p);
};

const update = async (req, res) => {
  const p = await Product.findByPk(req.params.id);
  if (!p) return res.status(404).json({ message: 'Product not found' });
  await p.update(req.body);
  res.json(p);
};

const remove = async (req, res) => {
  const p = await Product.findByPk(req.params.id);
  if (!p) return res.status(404).json({ message: 'Product not found' });
  await p.destroy();
  res.status(204).send();
};

module.exports = { list, getById, create, update, remove };
