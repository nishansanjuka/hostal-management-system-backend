import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class PrivateBoardingOwnerService {
    async getAllPrivateBoardingOwners() {
        return prisma.privateBoardingOwner.findMany();
    }

    async getPrivateBoardingOwnerById(id: number) {
        return prisma.privateBoardingOwner.findUnique({ where: { id } });
    }

    async createPrivateBoardingOwner(data: Prisma.PrivateBoardingOwnerCreateInput) {
        return prisma.privateBoardingOwner.create({ data });
    }

    async updatePrivateBoardingOwner(id: number, data: Prisma.PrivateBoardingOwnerUpdateInput) {
        return prisma.privateBoardingOwner.update({ where: { id }, data });
    }

    async deletePrivateBoardingOwner(id: number) {
        return prisma.privateBoardingOwner.delete({ where: { id } });
    }
}
