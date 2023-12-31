const { Sequelize } = require('sequelize');



const sequelize = new Sequelize('ecommerce', 'root', 'Rahma1990@', {

  host: 'localhost',
  dialect: 'mysql', 
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
  sequelize.sync()
  .then(() => {
    console.log('Database and tables synchronized.');
  })
  .catch((error) => {
    console.error('Error synchronizing the database:', error);
  });
module.exports = sequelize;
