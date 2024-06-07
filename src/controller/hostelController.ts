import { Request, Response } from "express";
import { HostelService } from "../services/hostel";

const hostelService = new HostelService();

export class HostelController {
    async getAllHostels(req: Request, res: Response) {
        try {
            const hostels = await hostelService.getAllHostels();
            res.json(hostels);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getHostelById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const hostel = await hostelService.getHostelById(Number(id));
            if (!hostel) {
                res.status(404).json({ message: "Hostel not found" });
            } else {
                res.json(hostel);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createHostel(req: Request, res: Response) {
        const data = req.body;
        try {
            const newHostel = await hostelService.createHostel(data);
            res.status(201).json(newHostel);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updateHostel(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedHostel = await hostelService.updateHostel(Number(id), data);
            res.json(updatedHostel);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteHostel(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await hostelService.deleteHostel(Number(id));
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
export default new HostelController();
