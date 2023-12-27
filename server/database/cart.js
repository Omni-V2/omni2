const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');
const User = require('./User');
const Product = require('./product');

const Cart = sequelize.define('Cart', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    defaultValue: 0,
  },
  quantity: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'User',
      key: 'id',
    },
  },
  ProductId: { 
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Product', 
      key: 'id',  
    },
  },
}, {
  tableName: 'cart', 
});

Cart.belongsTo(User, { foreignKey: 'UserId' });
Cart.belongsTo(Product, { foreignKey: 'ProductId' });

module.exports = Cart;
