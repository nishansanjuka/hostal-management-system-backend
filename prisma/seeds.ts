import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})

async function main() {
    // Clear existing data
    await prisma.exchangeRequest.deleteMany()
    await prisma.boardingRoom.deleteMany()
    await prisma.privateBoarding.deleteMany()
    await prisma.room.deleteMany()
    await prisma.hostel.deleteMany()
    await prisma.privateBoardingOwner.deleteMany()
    await prisma.student.deleteMany()
    await prisma.user.deleteMany()

    // Users
    const user1 = await prisma.user.create({
        data: {
            id: 2,
            username: 'john_doe',
            password: 'password123',
            email: 'john@example.com',
            phoneNumber: '1234567890',
            student: {
                create: {
                    studentId: 'student1'
                }
            }
        }
    })
    const user2 = await prisma.user.create({
        data: {
            id: 4,
            username: 'john_doe',
            password: 'password123',
            email: 'jo@example.com',
            phoneNumber: '1234567880',
            student: {
                create: {
                    studentId: 'student2'
                }
            }
        }
    })

    const user3 = await prisma.user.create({
        data: {
            id: 5,
            username: 'jane_doe',
            password: 'password123',
            email: 'jane@example.com',
            phoneNumber: '0987654321',
            privateBoardingOwner: {
                create: {

                }
            }
        }
    })

    // Hostels
    const hostel1 = await prisma.hostel.create({
        data: {
            name: 'Hostel A',
            genderType: 'MALE',
            distance: 1.5,
            year: 'FIRST'
        }
    })

    // Rooms
    const room1 = await prisma.room.create({
        data: {
            capacity: 4,
            beds: 4,
            hostel: {
                connect: { id: hostel1.id }
            },
            students: {
                connect: { studentId: 'student1' }
            }
        }
    })

    // Private Boarding
    const privateBoarding1 = await prisma.privateBoarding.create({
        data: {
            name: 'Private Boarding A',
            location: '123 Street, City',
            distance: 2.0,
            owner: {
                connect: { userId: 5 }
            },
            description: 'A nice place to stay',
            boardingRooms: {
                create: [
                    {
                        capacity: 2,
                        facilities: 'WiFi, Kitchen, Laundry',
                        rent: 500.0,
                        description: 'Room with 2 beds'
                    },
                    {
                        capacity: 1,
                        facilities: 'WiFi, Kitchen',
                        rent: 300.0,
                        description: 'Single room'
                    }
                ]
            }
        }
    })

    // Exchange Requests
    const exchangeRequest1 = await prisma.exchangeRequest.create({
        data: {
            status: 'PENDING',
            fromUser: {
                connect: { studentId: 'student1' }
            },
            toUser: {
                connect: { studentId: 'student2' }
            }
        }
    })
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
