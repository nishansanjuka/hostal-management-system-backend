import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export class RoomService {
    async getAllRooms(id: number) {
        return prisma.room.findMany({
            where: {
                hostelId: id
            }
        });
    }

    async getRoomById(roomId: number, hostelId: number) {
        const quary: Prisma.RoomFindUniqueArgs = {
            where: {
                hostelId: hostelId,
                id: roomId
            }
        }
        return prisma.room.findUnique(quary);
    }

    async createRoom(data: Prisma.RoomCreateManyInput) {
        return prisma.room.createMany({
            data: data
        });
    }

    async updateRoom(roomId: number, hostelId: number, data: Prisma.RoomUpdateInput) {
        return prisma.room.update({ where: { id: roomId, hostelId: hostelId }, data });
    }

    async deleteRoom(roomId: number, hostelId: number) {
        return prisma.room.delete({ where: { id: roomId, hostelId: hostelId } });
    }
}
