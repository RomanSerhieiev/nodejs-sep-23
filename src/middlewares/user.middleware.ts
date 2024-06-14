import { NextFunction, Request, Response } from "express";

import { ApiError } from "../errors/api.error";
import { User } from "../models/user.model";

class UserMiddleware {
  public async isUserExist(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.params.userId;
      const user = await User.findById(userId);
      if (!user) {
        throw new ApiError("User not found.", 400);
      }
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const userMiddleware = new UserMiddleware();
