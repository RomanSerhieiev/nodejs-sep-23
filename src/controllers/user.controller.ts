import { NextFunction, Request, Response } from "express";

import { IUser } from "../interfaces/user.interface";
import { userService } from "../services/user.service";

class UserController {
  public async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await userService.getAll();

      res.status(200).json(users);
    } catch (e) {
      next(e);
    }
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const dto: Partial<IUser> = req.body;

      const createdUser = await userService.create(dto);

      res.status(201).json(createdUser);
    } catch (e) {
      next(e);
    }
  }

  public async getById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;
      const receivedUser = await userService.getById(userId);
      res.json(receivedUser);
    } catch (e) {
      next(e);
    }
  }

  public async updateById(req: Request, res: Response, next: NextFunction) {
    try {
      const dto = req.body;
      const userId = req.params.userId;

      const updatedUser = await userService.updateById(userId, dto);

      res.status(201).json(updatedUser);
    } catch (e) {
      next(e);
    }
  }

  public async deleteById(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;
      const deletedUser = await userService.deleteById(userId);

      res.sendStatus(204).json(deletedUser);
    } catch (e) {
      next(e);
    }
  }
}

export const userController = new UserController();
