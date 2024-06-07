import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class HostelService {
    async getAllHostels() {
        return prisma.hostel.findMany();
    }

    async getHostelById(id: number) {
        return prisma.hostel.findUnique({ where: { id } });
    }

    async createHostel(data: Prisma.HostelCreateInput) {
        return prisma.hostel.create({ data });
    }

    async updateHostel(id: number, data: Prisma.HostelUpdateInput) {
        return prisma.hostel.update({ where: { id }, data });
    }

    async deleteHostel(id: number) {
        return prisma.hostel.delete({ where: { id } });
    }
}
