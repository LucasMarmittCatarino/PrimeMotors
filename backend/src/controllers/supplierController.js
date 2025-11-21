const { Supplier } = require('../models');

const list = async (req, res) => {
  const suppliers = await Supplier.findAll();
  res.json(suppliers);
};

const getById = async (req, res) => {
  const p = await Supplier.findByPk(req.params.id);
  if (!p) return res.status(404).json({ message: 'Supplier not found' });
  res.json(p);
};

const create = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Não autorizado' });
  }

  const { name, contact } = req.body;
  const p = await Supplier.create({ name, contact });
  res.status(201).json(p);
};

const update = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Não autorizado' });
  }

  const p = await Supplier.findByPk(req.params.id);
  if (!p) return res.status(404).json({ message: 'Supplier not found' });
  await p.update(req.body);
  res.json(p);
};

const remove = async (req, res) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Não autorizado' });
  }

  const p = await Supplier.findByPk(req.params.id);
  if (!p) return res.status(404).json({ message: 'Supplier not found' });
  await p.destroy();
  res.status(204).send();
};

module.exports = { list, getById, create, update, remove };
