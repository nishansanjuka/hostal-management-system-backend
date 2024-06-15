import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});
export class BoardingRoomService {
    // async createBoardingRoom(data: { capacity: number; facilities: string; }) {
    //     return prisma.boardingRoom.create({
    //         data
    //     });
    // }

    async getBoardingRooms() {
        return prisma.boardingRoom.findMany();
    }

    async getBoardingRoomById(id: number) {
        return prisma.boardingRoom.findUnique({
            where: { id }
        });
    }

    async updateBoardingRoom(id: number, data: { capacity?: number; facilities?: string; boardingId?: number }) {
        return prisma.boardingRoom.update({
            where: { id },
            data
        });
    }

    async deleteBoardingRoom(id: number) {
        return prisma.boardingRoom.delete({
            where: { id }
        });
    }
}
