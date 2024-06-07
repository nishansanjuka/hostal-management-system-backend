import { Request, Response } from "express";
import { RoomAllocationService } from "../services/roomAllocation";

const roomAllocationService = new RoomAllocationService();

export class RoomAllocationController {
    allocateStudents(arg0: string, allocateStudents: any) {
        throw new Error("Method not implemented.");
    }
    async getAllRoomAllocations(req: Request, res: Response) {
        try {
            const allocations = await roomAllocationService.getAllRoomAllocations();
            res.json(allocations);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getRoomAllocationById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const allocation = await roomAllocationService.getRoomAllocationById(Number(id));
            if (!allocation) {
                res.status(404).json({ message: "Room Allocation not found" });
            } else {
                res.json(allocation);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createRoomAllocation(req: Request, res: Response) {
        const data = req.body;
        try {
            const newAllocation = await roomAllocationService.createRoomAllocation(data);
            res.status(201).json(newAllocation);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateRoomAllocation(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedAllocation = await roomAllocationService.updateRoomAllocation(Number(id), data);
            res.json(updatedAllocation);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteRoomAllocation(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await roomAllocationService.deleteRoomAllocation(Number(id));
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
