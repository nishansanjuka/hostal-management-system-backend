const Sequelize = require('sequelize');

// Create a new Sequelize instance with the SQLite dialect
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'DataBase.sqlite' // Specify the path to your SQLite database file
});

module.exports = sequelize;
