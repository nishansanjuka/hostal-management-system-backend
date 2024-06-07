import { Request, Response } from "express";
import { RoomService } from "../services/room";

const roomService = new RoomService();

export class RoomController {
    async getAllRooms(req: Request, res: Response) {
        try {
            const rooms = await roomService.getAllRooms();
            res.json(rooms);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getRoomById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const room = await roomService.getRoomById(Number(id));
            if (!room) {
                res.status(404).json({ message: "Room not found" });
            } else {
                res.json(room);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createRoom(req: Request, res: Response) {
        const data = req.body;
        try {
            const newRoom = await roomService.createRoom(data);
            res.status(201).json(newRoom);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateRoom(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedRoom = await roomService.updateRoom(Number(id), data);
            res.json(updatedRoom);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteRoom(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await roomService.deleteRoom(Number(id));
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
