import { NextFunction, Request, Response } from "express";

class CommonController {
  public async get(req: Request, res: Response, next: NextFunction) {
    try {
      res.json("Hello!");
    } catch (e) {
      next(e);
    }
  }
}

export const commonController = new CommonController();
