
const sequelize = require('./config');
const { Hostel, Room, Student, RoomRequest } = require('./models');

async function connectDb() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');

        await createSampleData();
        console.log("example data added to the database")
        process.exit(0);

    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(1);
    }
}

async function createSampleData() {
    // Create hostels
    const hostel1 = await Hostel.create({
        name: 'Hostel A',
        address: '123 Street, City',
        contactInfo: 'hostelA@example.com',
        numRooms: 10,
        roomType: 'Shared',
        price: 100,
    });

    const hostel2 = await Hostel.create({
        name: 'Hostel B',
        address: '456 Street, City',
        contactInfo: 'hostelB@example.com',
        numRooms: 8,
        roomType: 'Private',
        price: 150,
    });

    // Create rooms
    const room1 = await Room.create({
        roomNumber: '101',
        bedType: 'Single',
        size: '10x10',
        price: 50,
        HostelId: hostel1.id,
    });

    const room2 = await Room.create({
        roomNumber: '102',
        bedType: 'Double',
        size: '12x12',
        price: 70,
        HostelId: hostel1.id,
    });

    // Create students
    const student1 = await Student.create({
        name: 'John Doe',
        email: 'johndoe@example.com',
        phoneNumber: '1234567890',
        studentId: 'ABC123',
    });

    const student2 = await Student.create({
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        phoneNumber: '9876543210',
        studentId: 'XYZ456',
    });

    // Create room requests
    await RoomRequest.create({
        startDate: new Date(),
        endDate: new Date(),
        StudentId: student1.id,
        HostelId: hostel1.id,
        RoomId: room1.id,
    });

    await RoomRequest.create({
        startDate: new Date(),
        endDate: new Date(),
        StudentId: student2.id,
        HostelId: hostel1.id,
        RoomId: room2.id,
    });

    console.log('Sample data created successfully.');
}

connectDb();
