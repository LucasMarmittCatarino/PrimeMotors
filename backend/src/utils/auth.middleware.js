// middlewares/auth.middleware.js
const jwt = require("jsonwebtoken");
const { readDb } = require("../db");

const JWT_SECRET = process.env.JWT_SECRET || "segredo-muito-forte";

function auth(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ error: "Token ausente" });

  const [, token] = authHeader.split(" ");
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    const db = readDb();
    const user = db.users.find((u) => u.id === payload.id);
    if (!user) return res.status(404).json({ error: "Usuário não encontrado" });

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ error: "Token inválido ou expirado" });
  }
}

module.exports = { auth };
