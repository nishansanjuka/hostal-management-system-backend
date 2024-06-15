import { Request, Response } from "express";
import { PrivateBoardingOwnerService } from "../services/privateBoardingOwner";

const privateBoardingOwnerService = new PrivateBoardingOwnerService();

export class PrivateBoardingOwnerController {
    async getAllPrivateBoardingOwners(req: Request, res: Response) {
        try {
            const owners = await privateBoardingOwnerService.getAllPrivateBoardingOwners();
            res.json(owners);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getPrivateBoardingOwnerById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const owner = await privateBoardingOwnerService.getPrivateBoardingOwnerById(Number(id));
            if (!owner) {
                res.status(404).json({ message: "Private Boarding Owner not found" });
            } else {
                res.json(owner);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async createPrivateBoardingOwner(req: Request, res: Response) {
        const data = req.body;
        try {
            const newOwner = await privateBoardingOwnerService.createPrivateBoardingOwner(data);
            res.status(201).json(newOwner);
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

    async updatePrivateBoardingOwner(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedOwner = await privateBoardingOwnerService.updatePrivateBoardingOwner(Number(id), data);
            res.json(updatedOwner);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deletePrivateBoardingOwner(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await privateBoardingOwnerService.deletePrivateBoardingOwner(Number(id));
            res.sendStatus(204);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}
