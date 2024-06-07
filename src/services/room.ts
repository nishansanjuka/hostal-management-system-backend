import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class RoomService {
    async getAllRooms() {
        return prisma.room.findMany();
    }

    async getRoomById(id: number) {
        return prisma.room.findUnique({ where: { id } });
    }

    async createRoom(data: Prisma.RoomCreateInput) {
        return prisma.room.create({ data });
    }

    async updateRoom(id: number, data: Prisma.RoomUpdateInput) {
        return prisma.room.update({ where: { id }, data });
    }

    async deleteRoom(id: number) {
        return prisma.room.delete({ where: { id } });
    }
}
