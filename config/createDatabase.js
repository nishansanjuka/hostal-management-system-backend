const sequelize = require('./database');
const Room = require('../models/roomModel');
const User =require('../models/userModel');
const Student=require('../models/studentModel');
const RoomRequest=require('../models/roomRequestModel');
const Hostel = require('../models/hostelModel');

// Sync the models with the database
sequelize.sync()
  .then(() => {
    console.log('Database sync successful');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });
