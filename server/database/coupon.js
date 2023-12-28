const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');

const Coupon = sequelize.define('Coupon', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  code: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
});

module.exports = Coupon;
