const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');
const User = require('./User');
const Product = require('./product.js');

const Wishlist = sequelize.define('Wishlist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  ProductId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Product,
      key: 'id',
    },
  },
});

Wishlist.belongsTo(User);
Wishlist.belongsTo(Product);

module.exports = Wishlist;
