import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
});

export class ExchangeRequestService {
    async getAllExchangeRequests() {
        return prisma.exchangeRequest.findMany();
    }

    async getExchangeRequestById(id: number) {
        return prisma.exchangeRequest.findUnique({
            where: { id },
            include: {
                fromUser: {
                    include: {
                        user: true,
                        room: {
                            include: {
                                hostel: true
                            }
                        }
                    }
                },
                toUser: {
                    include: {
                        user: true,
                        room: {
                            include: {
                                hostel: true
                            }
                        }
                    }
                }
            }
        });
    }

    // user make avalable state for swap
    async createExchangeRequest(data: Prisma.ExchangeRequestCreateInput) {
        try {
            const newExchangeRequest = await prisma.exchangeRequest.create({
                data,
            });
            return newExchangeRequest;
        } catch (error) {
            throw new Error(`Error creating exchange request: ${error.message}`);
        }
    }

    // apply for available users to swap or admin approve or riject exchange request
    async updateExchangeRequest(id: number, data: Prisma.ExchangeRequestUpdateInput) {
        try {
            const exchangeRequest = await prisma.exchangeRequest.findUnique({
                where: { id },
                include: {
                    fromUser: true,
                    toUser: true,
                },
            });

            if (!exchangeRequest) {
                throw new Error(`Exchange request with ID ${id} not found.`);
            }

            if (data.status === 'ACCEPTED') {
                const fromUser = exchangeRequest.fromUser;
                const toUser = exchangeRequest.toUser;

                if (!fromUser || !toUser) {
                    throw new Error('Both fromUser and toUser must be specified.');
                }

                // Swap room IDs between fromUser and toUser
                const tempRoomId = fromUser.roomId;
                await prisma.student.update({
                    where: { studentId: fromUser.studentId },
                    data: { roomId: toUser.roomId },
                });
                await prisma.student.update({
                    where: { studentId: toUser.studentId },
                    data: { roomId: tempRoomId },
                });
            }

            // Update the exchange request status
            const updatedRequest = await prisma.exchangeRequest.update({
                where: { id },
                data,
            });

            return updatedRequest;
        } catch (error) {
            throw new Error(`Error updating exchange request with ID ${id}: ${error.message}`);
        }
    }


    // user disable avalable state for swap or admin reject swap request
    async deleteExchangeRequest(id: number) {
        try {
            const deletedRequest = await prisma.exchangeRequest.delete({
                where: { id },
            });
            return deletedRequest;
        } catch (error) {
            throw new Error(`Error deleting exchange request with ID ${id}: ${error.message}`);
        }
    }
}
