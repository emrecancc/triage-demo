import { Request, Response, NextFunction } from 'express';

export const sampleHandler = (req: Request, res: Response, next: NextFunction): void => {
  try {
    if (!req.body.data) {
      res.status(400).json({ error: 'Missing data' });
      return;
    }
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};