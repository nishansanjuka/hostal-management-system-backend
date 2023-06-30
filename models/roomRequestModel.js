// roomRequests.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Student = require('./studentModel');
const Hostel = require('./studentModel');
const Room = require('./roomModel');

const RoomRequest = sequelize.define('RoomRequest', {
  request_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  start_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  tableName: 'room_requests',
});

RoomRequest.belongsTo(Student, {
  foreignKey: 'student_id',
});

RoomRequest.belongsTo(Hostel, {
  foreignKey: 'hostel_id',
});

RoomRequest.belongsTo(Room, {
  foreignKey: 'room_id',
});

module.exports = RoomRequest;
