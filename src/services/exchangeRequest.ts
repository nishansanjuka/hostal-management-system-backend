import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class ExchangeRequestService {
    async getAllExchangeRequests() {
        return prisma.exchangeRequest.findMany();
    }

    async getExchangeRequestById(id: number) {
        return prisma.exchangeRequest.findUnique({ where: { id } });
    }

    async createExchangeRequest(data: Prisma.ExchangeRequestCreateInput) {
        return prisma.exchangeRequest.create({ data });
    }

    async updateExchangeRequest(id: number, data: Prisma.ExchangeRequestUpdateInput) {
        return prisma.exchangeRequest.update({ where: { id }, data });
    }

    async deleteExchangeRequest(id: number) {
        return prisma.exchangeRequest.delete({ where: { id } });
    }
}
