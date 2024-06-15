import { Request, Response } from "express";
import { BoardingRoomService } from "../services/boardingRoom";

const boardingRoomService = new BoardingRoomService();

export class BoardingRoomController {
    async getAllBoardingRooms(req: Request, res: Response) {
        try {
            const rooms = await boardingRoomService.getBoardingRooms();
            res.json(rooms);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getBoardingRoomById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const room = await boardingRoomService.getBoardingRoomById(Number(id));
            if (!room) {
                res.status(404).json({ message: "Boarding Room not found" });
            } else {
                res.json(room);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    // async createBoardingRoom(req: Request, res: Response) {
    //     const data = req.body;
    //     try {
    //         const newRoom = await boardingRoomService.createBoardingRoom(data);
    //         res.status(201).json(newRoom);
    //     } catch (error) {
    //         if (error.code === 'P2002') {
    //             console.error('Unique constraint violation: A boarding room with this ID already exists.');
    //             res.status(400).json({ message: 'A boarding room with this ID already exists.' });
    //         } else {
    //             console.error('An error occurred:', error);
    //             res.status(400).json({ message: error.message });
    //         }

    //     }
    // }

    async updateBoardingRoom(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedRoom = await boardingRoomService.updateBoardingRoom(Number(id), data);
            res.json(updatedRoom);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteBoardingRoom(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await boardingRoomService.deleteBoardingRoom(Number(id));
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
