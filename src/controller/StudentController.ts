import { Request, Response } from "express";
import { StudentService } from "../services/student";

const studentService = new StudentService();

export class StudentController {
    async getAllStudents(req: Request, res: Response) {
        try {
            const students = await studentService.getAllStudents();
            res.json(students);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getStudentById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const student = await studentService.getStudentById(id);
            if (!student) {
                res.status(404).json({ message: "Student not found" });
            } else {
                res.json(student);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createStudent(req: Request, res: Response) {
        const data = req.body;
        try {
            const newStudent = await studentService.createStudent(data);
            console.log(newStudent)
            res.status(201).json(newStudent);
        } catch (error) {
            if (error.code === 'P2002') {
                console.error('Unique constraint violation: A student with this email already exists.');
                res.status(400).json({ message: 'A student with this email already exists.' });
            } else {
                console.error('An error occurred:', error);
                res.status(400).json({ message: error.message });
            }


        }
    }

    async updateStudent(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedStudent = await studentService.updateStudent(id, data);
            res.json(updatedStudent);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteStudent(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await studentService.deleteStudent(id);
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
