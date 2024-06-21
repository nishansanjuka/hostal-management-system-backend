import { Request, Response } from "express";
import { RoomService } from "../services/room";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

const roomService = new RoomService();

export class RoomController {
    async getAllRooms(req: Request, res: Response) {
        const { id } = req.params;
        try {
            console.log("params :", req.params);
            const rooms = await roomService.getAllRooms(Number(id));
            res.json(rooms);
        } catch (error) {
            console.error('Error fetching rooms:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async getRoomById(req: Request, res: Response) {
        const { id, roomId } = req.params;
        try {
            const room = await roomService.getRoomById(Number(roomId), Number(id));
            if (!room) {
                res.status(404).json({ message: "Room not found" });
            } else {
                res.json(room);
            }
        } catch (error) {
            console.error('Error fetching room:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }
    }

    async createRoom(req: Request, res: Response) {
        const data = req.body;
        try {
            const newRoom = await roomService.createRoom(data);
            res.status(201).json(newRoom);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                if (error.code === 'P2002') {
                    console.error('Unique constraint violation:', error);
                    res.status(400).json({ message: 'A room with this ID already exists.' });
                } else {
                    console.error('Prisma client error:', error);
                    res.status(400).json({ message: 'Bad Request' });
                }
            } else {
                console.error('An unexpected error occurred:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }

    async updateRoom(req: Request, res: Response) {
        const { id, roomId } = req.params;
        const data = req.body;
        try {
            const updatedRoom = await roomService.updateRoom(Number(roomId), Number(id), data);
            res.json(updatedRoom);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                console.error('Prisma client error:', error);
                res.status(400).json({ message: 'Bad Request' });
            } else {
                console.error('An unexpected error occurred:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }

    async deleteRoom(req: Request, res: Response) {
        const { id, roomId } = req.params;
        try {
            await roomService.deleteRoom(Number(roomId), Number(id));
            res.sendStatus(204);
        } catch (error) {
            if (error instanceof PrismaClientKnownRequestError) {
                console.error('Prisma client error:', error);
                res.status(400).json({ message: 'Bad Request' });
            } else {
                console.error('An unexpected error occurred:', error);
                res.status(500).json({ message: 'Internal Server Error' });
            }
        }
    }
}
