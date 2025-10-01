const { sequelize, User, Product } = require('./models');
const bcrypt = require('bcrypt');

(async () => {
  await sequelize.sync();
  const pass = await bcrypt.hash('admin123', 10);
  await User.create({
    name: 'Admin',
    email: 'admin@example.com',
    password: pass,
    role: 'admin'
  });

  console.log('Seed completed');
  process.exit();
})();
