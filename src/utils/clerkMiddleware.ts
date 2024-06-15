import { NextFunction, Request, Response } from 'express';
import clerk from './clerkConfig';

export const clerkMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const authorizationHeader = req.headers['authorization'];

    if (!authorizationHeader) {
        return res.status(401).json({ error: 'Authorization header missing' });
    }

    const token = authorizationHeader.replace('Bearer ', '');

    try {
        const { userId } = await clerk.verifyToken(token);
        (req as any).user = { id: userId };
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid or expired token' });
    }
};
