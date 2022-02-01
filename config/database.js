const { Sequelize } = require('sequelize');
module.exports = db = new Sequelize('postgres', 'postgres', 'parool', {
    host: 'localhost',
    dialect: 'postgres',
  });