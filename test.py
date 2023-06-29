import sqlite3

# Connect to the SQLite database
conn = sqlite3.connect('database.sqlite')
cursor = conn.cursor()

# Sample data for Hostels table
hostels_data = [
    ('Hostel A', 'Address A', 'Contact A', 20, 'Single', 100),
    ('Hostel B', 'Address B', 'Contact B', 15, 'Double', 150),
    ('Hostel C', 'Address C', 'Contact C', 25, 'Single', 120),
    ('Hostel D', 'Address D', 'Contact D', 18, 'Double', 160),
    ('Hostel E', 'Address E', 'Contact E', 30, 'Single', 110),
    ('Hostel F', 'Address F', 'Contact F', 12, 'Double', 140),
    ('Hostel G', 'Address G', 'Contact G', 22, 'Single', 130),
    ('Hostel H', 'Address H', 'Contact H', 17, 'Double', 170),
    ('Hostel I', 'Address I', 'Contact I', 28, 'Single', 90),
    ('Hostel J', 'Address J', 'Contact J', 10, 'Double', 180)
]

# Sample data for Rooms table
rooms_data = [
    (1, '101', 'Single', '10x10', 100),
    (1, '102', 'Single', '10x10', 100),
    (2, '201', 'Double', '12x12', 150),
    (2, '202', 'Double', '12x12', 150),
    (3, '301', 'Single', '11x11', 120),
    (3, '302', 'Single', '11x11', 120),
    (4, '401', 'Double', '13x13', 160),
    (4, '402', 'Double', '13x13', 160),
    (5, '501', 'Single', '10x10', 110),
    (5, '502', 'Single', '10x10', 110)
]

# Sample data for Students table
students_data = [
    ('John Doe', 'john@example.com', '1234567890', 'STU001'),
    ('Jane Smith', 'jane@example.com', '0987654321', 'STU002'),
    ('Mike Johnson', 'mike@example.com', '9876543210', 'STU003'),
    ('Emily Brown', 'emily@example.com', '0123456789', 'STU004'),
    ('David Lee', 'david@example.com', '6789054321', 'STU005'),
    ('Sarah Wilson', 'sarah@example.com', '8765094321', 'STU006'),
    ('Alex Turner', 'alex@example.com', '9087654312', 'STU007'),
    ('Olivia Davis', 'olivia@example.com', '1029384756', 'STU008'),
    ('Daniel Thompson', 'daniel@example.com', '6758493021', 'STU009'),
    ('Sophia Clark', 'sophia@example.com', '9823746592', 'STU010')
]

# Sample data for RoomRequests table
room_requests_data = [
    (1, 1, 1, '2023-07-01', '2023-08-01'),
    (2, 1, 2, '2023-07-15', '2023-08-15'),
    (3, 2, 3, '2023-07-10', '2023-08-10'),
    (4, 2, 4, '2023-07-05', '2023-08-05'),
    (5, 3, 5, '2023-07-20', '2023-08-20'),
    (6, 3, 6, '2023-07-25', '2023-08-25'),
    (7, 4, 7, '2023-07-08', '2023-08-08'),
    (8, 4, 8, '2023-07-12', '2023-08-12'),
    (9, 5, 9, '2023-07-03', '2023-08-03'),
    (10, 5, 10, '2023-07-18', '2023-08-18')
]

# Insert data into Hostels table
cursor.executemany('INSERT INTO Hostels (name, address, contactInfo, numRooms, roomType, price) VALUES (?, ?, ?, ?, ?, ?)', hostels_data)

# Insert data into Rooms table
cursor.executemany('INSERT INTO Rooms (hostelId, roomNumber, bedType, size, price) VALUES (?, ?, ?, ?, ?)', rooms_data)

# Insert data into Students table
cursor.executemany('INSERT INTO Students (name, email, phoneNumber, studentId) VALUES (?, ?, ?, ?)', students_data)

# Insert data into RoomRequests table
cursor.executemany('INSERT INTO RoomRequests (studentId, hostelId, roomId, startDate, endDate) VALUES (?, ?, ?, ?, ?)', room_requests_data)

# Commit the changes and close the connection
conn.commit()
conn.close()
