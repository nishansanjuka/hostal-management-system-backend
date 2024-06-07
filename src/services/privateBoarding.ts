import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class PrivateBoardingService {
    async getAllPrivateBoardings() {
        return prisma.privateBoarding.findMany();
    }

    async getPrivateBoardingById(id: number) {
        return prisma.privateBoarding.findUnique({ where: { id } });
    }

    async createPrivateBoarding(data: Prisma.PrivateBoardingCreateInput) {
        return prisma.privateBoarding.create({ data });
    }

    async updatePrivateBoarding(id: number, data: Prisma.PrivateBoardingUpdateInput) {
        return prisma.privateBoarding.update({ where: { id }, data });
    }

    async deletePrivateBoarding(id: number) {
        return prisma.privateBoarding.delete({ where: { id } });
    }
}
