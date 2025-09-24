const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('client','admin'), defaultValue: 'client' },
  phone: { type: DataTypes.STRING },
  smartphone: { type: DataTypes.STRING },
  birthday: { type: DataTypes.DATEONLY },
  cpf: { type: DataTypes.STRING },
  cnpj: { type: DataTypes.STRING },
  cep: { type: DataTypes.STRING },
  street: { type: DataTypes.STRING },
  number: { type: DataTypes.STRING },
  complement: { type: DataTypes.STRING },
  city: { type: DataTypes.STRING },
  state: { type: DataTypes.STRING },
  newsletter: { type: DataTypes.BOOLEAN, defaultValue: false }
});

module.exports = User;
