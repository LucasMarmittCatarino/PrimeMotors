const { Order, OrderItem, CartItem, Product, User } = require('../models');

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

    const order = await Order.create({ UserId: req.user.id, total }, { transaction: t });

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

module.exports = { checkout, getMyOrders, getAllOrders };
