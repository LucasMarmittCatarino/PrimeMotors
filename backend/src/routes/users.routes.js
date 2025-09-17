const { Router } = require('express');
const { v4: uuid } = require('uuid');
const bcrypt = require('bcryptjs');
const { readDb, writeDb } = require('../db');
const { validateUserPayload } = require('../validators/user.validator');
const { omit } = require('../utils/sanitize');

const router = Router();

// GET /users
router.get('/', (req, res) => {
  const db = readDb();
  const safe = db.users.map((u) => omit(u, ['passwordHash']));
  res.json(safe);
});

// POST /users
router.post('/', async (req, res) => {
  const errors = validateUserPayload(req.body);
  if (errors.length) return res.status(400).json({ errors });

  const db = readDb();

  const passwordHash = await bcrypt.hash(req.body.password, 10);
  const user = {
    id: uuid(),
    name: req.body.name.trim(),
    role: req.body.role,
    passwordHash
  };
  db.users.push(user);
  writeDb(db);

  res.status(201).json(omit(user, ['passwordHash']));
});

// PUT /users/:id
const { auth } = require("../utils/auth.middleware");

router.put('/:id', auth, async (req, res) => {
  if (req.user.id !== req.params.id) {
    return res.status(403).json({ error: "Você só pode editar o próprio perfil" });
  }

  const errors = validateUserPayload(req.body, { partial: true });
  if (errors.length) return res.status(400).json({ errors });

  const db = readDb();
  const idx = db.users.findIndex((u) => u.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Usuário não encontrado' });

  const patch = { ...req.body };
  if ('password' in patch) {
    patch.passwordHash = await bcrypt.hash(patch.password, 10);
    delete patch.password;
  }

  db.users[idx] = { ...db.users[idx], ...patch };
  writeDb(db);

  res.json(omit(db.users[idx], ['passwordHash']));
});

// DELETE /users/:id 
router.delete('/:id', (req, res) => {
  const db = readDb();
  const prevLen = db.users.length;
  db.users = db.users.filter((u) => u.id !== req.params.id);
  if (db.users.length === prevLen) return res.status(404).json({ error: 'Usuário não encontrado' });
  writeDb(db);
  res.status(204).send();
});

module.exports = router;
