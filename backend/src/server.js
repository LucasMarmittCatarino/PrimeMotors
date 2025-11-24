const app = require('./app');
const { sequelize } = require('./models');

const PORT = process.env.PORT || 3000;

(async () => {
  try {
    await sequelize.sync();
    app.listen(PORT, "0.0.0.0", () =>
      console.log(`Server running on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.error('Erro ao iniciar', err);
  }
})();