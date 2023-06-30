const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Hostel = require('./hostelModel');

const Room = sequelize.define('Room', {
  room_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  room_number: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bed_type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  space: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'rooms',
});

Room.belongsTo(Hostel, {
  foreignKey: 'hostel_id',
});

module.exports = Room;
