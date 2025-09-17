const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require("./routes/auth.routes");
const productsRoutes = require('./routes/products.routes');
const usersRoutes = require('./routes/users.routes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use("/auth", authRoutes);

app.get('/', (_req, res) => res.json({ ok: true, service: 'LuxDrive API' }));

app.use('/products', productsRoutes);
app.use('/users', usersRoutes);

// 404 handler
app.use((req, res) => res.status(404).json({ error: 'Rota não encontrada' }));

// error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚗 LuxDrive API rodando em http://localhost:${PORT}`));
