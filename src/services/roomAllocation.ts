import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class RoomAllocationService {
    async getAllRoomAllocations() {
        return prisma.roomAllocation.findMany();
    }

    async getRoomAllocationById(id: number) {
        return prisma.roomAllocation.findUnique({ where: { id } });
    }

    async createRoomAllocation(data: Prisma.RoomAllocationCreateInput) {
        return prisma.roomAllocation.create({ data });
    }

    async updateRoomAllocation(id: number, data: Prisma.RoomAllocationUpdateInput) {
        return prisma.roomAllocation.update({ where: { id }, data });
    }

    async deleteRoomAllocation(id: number) {
        return prisma.roomAllocation.delete({ where: { id } });
    }
}
