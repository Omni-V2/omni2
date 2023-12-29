const { DataTypes } = require('sequelize');
const sequelize = require('./index.js');
const User = require('./User');
const Product = sequelize.define('Product', {
  productName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },sales: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  available: {
    type: DataTypes.STRING,
    defaultValue: true,
  },
  imageUrl: {
    type: DataTypes.JSON,
  },
  categories: {
    type: DataTypes.JSON,
  },
  size: {
    type: DataTypes.STRING(50),
  },
  colour: {
    type: DataTypes.STRING(50),
  },
  UserId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  }
});
Product.belongsTo(User, { foreignKey: 'UserId' })
module.exports = Product;
