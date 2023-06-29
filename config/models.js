const { DataTypes } = require('sequelize');
const sequelize = require('./config');

const Hostel = sequelize.define('Hostel', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contactInfo: {
    type: DataTypes.STRING,
  },
  numRooms: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  roomType: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

const Room = sequelize.define('Room', {
  roomNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bedType: {
    type: DataTypes.STRING,
  },
  size: {
    type: DataTypes.STRING,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

const Student = sequelize.define('Student', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.STRING,
  },
  studentId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

const RoomRequest = sequelize.define('RoomRequest', {
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

// Define associations between the models
Hostel.hasMany(Room);
Room.belongsTo(Hostel);

Student.hasMany(RoomRequest);
RoomRequest.belongsTo(Student);

Hostel.hasMany(RoomRequest);
RoomRequest.belongsTo(Hostel);

module.exports = { Hostel, Room, Student, RoomRequest };
