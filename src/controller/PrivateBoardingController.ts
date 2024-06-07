import { Request, Response } from "express";
import { PrivateBoardingService } from "../services/privateBoarding";

const privateBoardingService = new PrivateBoardingService();

export class PrivateBoardingController {
    async getAllPrivateBoardings(req: Request, res: Response) {
        try {
            const boardings = await privateBoardingService.getAllPrivateBoardings();
            res.json(boardings);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getPrivateBoardingById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const boarding = await privateBoardingService.getPrivateBoardingById(Number(id));
            if (!boarding) {
                res.status(404).json({ message: "Private Boarding not found" });
            } else {
                res.json(boarding);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createPrivateBoarding(req: Request, res: Response) {
        const data = req.body;
        try {
            const newBoarding = await privateBoardingService.createPrivateBoarding(data);
            res.status(201).json(newBoarding);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async updatePrivateBoarding(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedBoarding = await privateBoardingService.updatePrivateBoarding(Number(id), data);
            res.json(updatedBoarding);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deletePrivateBoarding(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await privateBoardingService.deletePrivateBoarding(Number(id));
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
