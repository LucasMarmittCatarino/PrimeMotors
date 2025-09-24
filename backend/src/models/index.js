const sequelize = require('../config/database');
const User = require('./user');
const Product = require('./product');
const CartItem = require('./cartItem');
const Order = require('./order');
const OrderItem = require('./orderItem');

// associações do carrinho: User <-> CartItem <-> Product
User.hasMany(CartItem, { onDelete: 'CASCADE' });
CartItem.belongsTo(User);
Product.hasMany(CartItem);
CartItem.belongsTo(Product);

// pedidos
User.hasMany(Order, { onDelete: 'CASCADE' });
Order.belongsTo(User);

// order items
Order.hasMany(OrderItem, { onDelete: 'CASCADE' });
OrderItem.belongsTo(Order);
Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

module.exports = { sequelize, User, Product, CartItem, Order, OrderItem };
