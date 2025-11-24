const request = require('supertest');
const jwt = require('jsonwebtoken');
const app = require('../app');
const { User, Product, Order, OrderItem, sequelize } = require('../models');

describe('Integração Orders (API)', () => {
  let tokenAdmin;
  let product1, product2;

  beforeAll(async () => {
    // Sincroniza o banco (apenas dev/test)
    await sequelize.sync({ force: false });
    
    // Busca um usuário admin de teste
    const admin = await User.findOne({ where: { email: "admin@example.com" } });
    
    // Gera token manualmente usando o ID do admin
    tokenAdmin = jwt.sign({ id: admin.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRES_IN || "1h",
    });

    // Cria produtos
    product1 = await Product.create({ title: 'Produto 1', price: 100, stock: 10 });
    product2 = await Product.create({ title: 'Produto 2', price: 200, stock: 3 });

    // Cria pedidos e orderItems
    const order = await Order.create({ UserId: admin.id, total: 500, status: 'completed' });
    await OrderItem.create({ OrderId: order.id, ProductId: product1.id, quantity: 2, priceAtPurchase: 100 });
    await OrderItem.create({ OrderId: order.id, ProductId: product2.id, quantity: 3, priceAtPurchase: 200 });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  test('GET /api/orders/admin-home-info', async () => {
    const res = await request(app)
      .get('/api/orders/admin-home-info')
      .set('Authorization', `Bearer ${tokenAdmin}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.totalItemsSold).toBeGreaterThan(0);
    expect(res.body.topProduct.Product.id).not.toBeNull();
    expect(Array.isArray(res.body.lowStockProducts)).toBe(true);
    expect(res.body.lowStockProducts.some(p => p.id === product2.id)).toBe(true); // stock <= 5
  });
});
