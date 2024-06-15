import { Request, Response } from "express";
import { UserService } from "../services/user";

const userService = new UserService();

export class UserController {
    async getAllUsers(req: Request, res: Response) {
        try {
            const users = await userService.getAllUsers();
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUserById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const user = await userService.getUserById(Number(id));
            if (!user) {
                res.status(404).json({ message: "User not found" });
            } else {
                res.json(user);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createUser(req: Request, res: Response) {
        const data = req.body;
        try {
            const newUser = await userService.createUser(data);
            res.status(201).json(newUser);
        } catch (error) {
            if (error.code === 'P2002') {
                console.error('Unique constraint violation: A user with this email already exists.');
                res.status(400).json({ message: 'A user with this email already exists.' });
            } else {
                console.error('An error occurred:', error);
                res.status(400).json({ message: 'An error occurred.' });
            }
        }
    }

    async updateUser(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedUser = await userService.updateUser(Number(id), data);
            res.json(updatedUser);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteUser(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await userService.deleteUser(Number(id));
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
