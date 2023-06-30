const sequelize = require('./database');
const Room = require('../models/roomModel');
const User =require('../models/userModel');
const Student=require('../models/studentModel');
const RoomRequest=require('../models/roomRequestModel');
const Hostel = require('../models/hostelModel');

// Assuming you have established a connection to the database using sequelize

// Add sample data to Hostels table
const createHostels = async () => {
  try {
    await Hostel.bulkCreate([
      {
        name: 'Hostel A',
        address: '123 Main Street',
        contact_info: 'hostela@example.com',
        num_rooms: 10,
        room_type: 'Single',
        price: 100,
      },
      {
        name: 'Hostel B',
        address: '456 Elm Street',
        contact_info: 'hostelb@example.com',
        num_rooms: 8,
        room_type: 'Double',
        price: 80,
      },
      // Add more hostels as needed
    ]);
    console.log('Sample hostels created successfully.');
  } catch (error) {
    console.error('Error creating sample hostels:', error);
  }
};

// Add sample data to Rooms table
const createRooms = async () => {
  try {
    await Room.bulkCreate([
      {
        hostel_id: 1, // Assuming hostel_id 1 corresponds to Hostel A
        room_number: '101',
        bed_type: 'Single',
        size: '10x10',
        price: 100,
      },
      {
        hostel_id: 2, // Assuming hostel_id 2 corresponds to Hostel B
        room_number: '201',
        bed_type: 'Double',
        size: '12x12',
        price: 80,
      },
      // Add more rooms as needed
    ]);
    console.log('Sample rooms created successfully.');
  } catch (error) {
    console.error('Error creating sample rooms:', error);
  }
};

// Add sample data to Students table
const createStudents = async () => {
  try {
    await Student.bulkCreate([
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone_number: '1234567890',
        student_id_number: 'ABC123',
      },
      {
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        phone_number: '9876543210',
        student_id_number: 'DEF456',
      },
      // Add more students as needed
    ]);
    console.log('Sample students created successfully.');
  } catch (error) {
    console.error('Error creating sample students:', error);
  }
};

// Add sample data to RoomRequests table
const createRoomRequests = async () => {
  try {
    await RoomRequest.bulkCreate([
      {
        student_id: 1, // Assuming student_id 1 corresponds to John Doe
        hostel_id: 1, // Assuming hostel_id 1 corresponds to Hostel A
        room_id: 1, // Assuming room_id 1 corresponds to Room 101
        start_date: new Date(),
        end_date: new Date('2023-12-31'),
      },
      {
        student_id: 2, // Assuming student_id 2 corresponds to Jane Smith
        hostel_id: 2, // Assuming hostel_id 2 corresponds to Hostel B
        room_id: 2, // Assuming room_id 2 corresponds to Room 201
        start_date: new Date(),
        end_date: new Date('2024-01-31'),
      },
      // Add more room requests as needed
    ]);
    console.log('Sample room requests created successfully.');
  } catch (error) {
    console.error('Error creating sample room requests:', error);
  }
};

// Call the functions to populate the tables with sample data
const populateSampleData = async () => {
  await createHostels();
  await createRooms();
  await createStudents();
  await createRoomRequests();
  
  // Close the database connection after populating the sample data
  sequelize.close();
};

// Run the function to populate sample data
populateSampleData();
