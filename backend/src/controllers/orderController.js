const { Order, OrderItem, CartItem, Product, User } = require('../models');
const { Op, fn, col, literal } = require('sequelize');

const sequelize = require('../config/database');

const checkout = async (req, res) => {
  // cria pedido a partir do carrinho do usuário
  const t = await sequelize.transaction();
  try {
    const cartItems = await CartItem.findAll({ where: { UserId: req.user.id }, include: [Product], transaction: t });
    if (!cartItems.length) {
      await t.rollback();
      return res.status(400).json({ message: 'Cart is empty' });
    }

    let total = 0;
    for (const ci of cartItems) {
      if (ci.quantity > ci.Product.stock) {
        await t.rollback();
        return res.status(400).json({ message: `Produto ${ci.Product.title} sem estoque suficiente` });
      }
      total += ci.quantity * ci.Product.price;
    }

    const order = await Order.create({ UserId: req.user.id, total, status: 'completed' }, { transaction: t });

    for (const ci of cartItems) {
      await OrderItem.create({
        OrderId: order.id,
        ProductId: ci.Product.id,
        quantity: ci.quantity,
        priceAtPurchase: ci.Product.price
      }, { transaction: t });

      // decrementar estoque
      ci.Product.stock -= ci.quantity;
      await ci.Product.save({ transaction: t });
    }

    // limpar carrinho
    await CartItem.destroy({ where: { UserId: req.user.id }, transaction: t });

    await t.commit();
    res.status(201).json(order);
  } catch (err) {
    await t.rollback();
    res.status(500).json({ message: 'Erro ao finalizar pedido', error: err.message });
  }
};

const getMyOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      where: { UserId: req.user.id },
      include: [
        {
          model: OrderItem,
          include: [Product], // popula os produtos dentro de cada OrderItem
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar pedidos do usuário', error: err.message });
  }
};

const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: OrderItem,
          include: [Product], // para trazer os produtos também
        },
        {
          model: User,
          attributes: ['id', 'name', 'email', 'role'] // dados do usuário dono da ordem
        }
      ],
      order: [['createdAt', 'DESC']]
    });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar ordens', error: err.message });
  }
};

const getHomeAdminInfo = async (req, res) => {
  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();

  // início e fim do mês atual
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0, 23, 59, 59);

  try {
    // Total de vendas no mês
    const totalSalesData = await OrderItem.findAll({
      attributes: [[fn('SUM', col('quantity')), 'totalItemsSold']],
      include: [{
        model: Order,
        attributes: [],
        where: { createdAt: { [Op.between]: [startDate, endDate] } }
      }]
    });
    const totalItemsSold = totalSalesData[0]?.get('totalItemsSold') || 0;

    // Produto mais vendido no período (todos os atributos)
    const topProductData = await OrderItem.findAll({
      attributes: [
        [fn('SUM', col('quantity')), 'totalSold']
      ],
      include: [
        { model: Order, attributes: [], where: { createdAt: { [Op.between]: [startDate, endDate] } } },
        { model: Product } // <-- remove attributes para pegar todos
      ],
      group: ['ProductId', 'Product.id'],
      order: [[literal('totalSold'), 'DESC']],
      limit: 1
    });

    const topProduct = topProductData.length ? topProductData[0] : null;

    // Produtos com baixo estoque (todos os atributos)
    const lowStockProducts = await Product.findAll({
      where: { stock: { [Op.lte]: 5 } }
    });

    return res.json({
      totalItemsSold,
      topProduct,
      lowStockProducts
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Erro ao carregar informações' });
  }
};

module.exports = { checkout, getMyOrders, getAllOrders, getHomeAdminInfo };
