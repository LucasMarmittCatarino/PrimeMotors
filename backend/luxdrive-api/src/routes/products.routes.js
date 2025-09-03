const { Router } = require('express');
const { v4: uuid } = require('uuid');
const { readDb, writeDb } = require('../db');
const { validateProductPayload } = require('../validators/product.validator');

const router = Router();

// GET /products?q=termo
router.get('/', (req, res) => {
  const { q } = req.query;
  const db = readDb();
  let items = db.products;

  if (q && String(q).trim() !== '') {
    const query = String(q).toLowerCase().trim();
    const asNumber = Number(query);
    const byName = (p) => p.name.toLowerCase().includes(query);
    const byNumeric =
      !Number.isNaN(asNumber) ? (p) => p.price === asNumber || p.quantity === asNumber : () => false;

    items = items.filter((p) => byName(p) || byNumeric(p));
  }

  res.json(items);
});

// POST /products
router.post('/', (req, res) => {
  const errors = validateProductPayload(req.body);
  if (errors.length) return res.status(400).json({ errors });

  const db = readDb();
  const product = {
    id: uuid(),
    name: req.body.name.trim(),
    price: req.body.price,
    quantity: req.body.quantity
  };
  db.products.push(product);
  writeDb(db);
  res.status(201).json(product);
});

// PUT /products/:id
router.put('/:id', (req, res) => {
  const errors = validateProductPayload(req.body, { partial: true });
  if (errors.length) return res.status(400).json({ errors });

  const db = readDb();
  const idx = db.products.findIndex((p) => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Produto não encontrado' });

  db.products[idx] = { ...db.products[idx], ...req.body };
  writeDb(db);
  res.json(db.products[idx]);
});

// DELETE /products/:id
router.delete('/:id', (req, res) => {
  const db = readDb();
  const prevLen = db.products.length;
  db.products = db.products.filter((p) => p.id !== req.params.id);
  if (db.products.length === prevLen) return res.status(404).json({ error: 'Produto não encontrado' });
  writeDb(db);
  res.status(204).send();
});

module.exports = router;
