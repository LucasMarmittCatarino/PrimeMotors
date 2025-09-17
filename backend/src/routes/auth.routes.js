// routes/auth.routes.js
const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { readDb } = require("../db");
const { omit } = require("../utils/sanitize");

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "segredo-muito-forte";

// POST /auth/login
router.post("/login", async (req, res) => {
  const { name, password } = req.body;
  if (!name || !password) {
    return res.status(400).json({ error: "Nome e senha são obrigatórios" });
  }

  const db = readDb();
  const user = db.users.find((u) => u.name === name);
  if (!user) return res.status(401).json({ error: "Credenciais inválidas" });

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return res.status(401).json({ error: "Credenciais inválidas" });

  const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, { expiresIn: "1h" });

  res.json({
    token,
    user: omit(user, ["passwordHash"]),
  });
});

// GET /auth/me
router.get("/me", (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ error: "Token ausente" });

  const [, token] = auth.split(" ");
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const db = readDb();
    const user = db.users.find((u) => u.id === payload.id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    res.json(omit(user, ["passwordHash"]));
  } catch (err) {
    res.status(401).json({ error: "Token inválido ou expirado" });
  }
});

module.exports = router;
