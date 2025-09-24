const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const OrderItem = sequelize.define('OrderItem', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  quantity: { type: DataTypes.INTEGER, allowNull: false },
  priceAtPurchase: { type: DataTypes.FLOAT, allowNull: false }
});

module.exports = OrderItem;
