import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class StudentService {
    async getAllStudents() {
        return prisma.student.findMany();
    }

    async getStudentById(studentId: string) {
        return prisma.student.findUnique({ where: { studentId } });
    }

    async createStudent(data: Prisma.StudentCreateInput) {
        return prisma.student.create({ data });
    }

    async updateStudent(studentId: string, data: Prisma.StudentUpdateInput) {
        return prisma.student.update({ where: { studentId }, data });
    }

    async deleteStudent(studentId: string) {
        return prisma.student.delete({ where: { studentId } });
    }
}
