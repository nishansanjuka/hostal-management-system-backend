import { Request, Response } from "express";
import { ExchangeRequestService } from "../services/exchangeRequest";

const exchangeRequestService = new ExchangeRequestService();

export class ExchangeRequestController {
    async getAllExchangeRequests(req: Request, res: Response) {
        try {
            const requests = await exchangeRequestService.getAllExchangeRequests();
            res.json(requests);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getExchangeRequestById(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const request = await exchangeRequestService.getExchangeRequestById(Number(id));
            if (!request) {
                res.status(404).json({ message: "Exchange Request not found" });
            } else {
                res.json(request);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateExchangeRequest(req: Request, res: Response) {
        const { id } = req.params;
        const data = req.body;
        try {
            const updatedRequest = await exchangeRequestService.updateExchangeRequest(Number(id), data);
            res.json(updatedRequest);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}
