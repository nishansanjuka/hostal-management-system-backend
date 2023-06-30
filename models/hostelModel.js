const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Hostel = sequelize.define('Hostel', {
  hostel_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Distance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  contact_info: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  num_rooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  type: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
}, {
  tableName: 'hostels',
});

module.exports = Hostel;
