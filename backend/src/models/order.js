const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Order = sequelize.define('Order', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  total: { type: DataTypes.FLOAT, allowNull: false },
  status: { type: DataTypes.ENUM('pending','completed','canceled'), defaultValue: 'pending' }
});

module.exports = Order;
