const { sequelize, User, Product } = require('./models');
const bcrypt = require('bcrypt');

(async () => {
  await sequelize.sync({ force: true });
  const pass = await bcrypt.hash('admin123', 10);
  await User.create({ name: 'Admin', email: 'admin@example.com', password: pass, role: 'admin' });
  await User.create({ name: 'Cliente', email: 'cliente@example.com', password: await bcrypt.hash('cliente123',10), role: 'client' });

  await Product.bulkCreate([
    { title: 'Carro A', description: 'Sedã compacto', price: 20000, stock: 3, imageUrl: '' },
    { title: 'Carro B', description: 'SUV médio', price: 45000, stock: 2, imageUrl: '' }
  ]);

  console.log('Seed completed');
  process.exit();
})();
