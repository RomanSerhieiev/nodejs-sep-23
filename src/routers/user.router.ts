import { Router } from "express";

import { userController } from "../controllers/user.controller";
import { commonMiddleware } from "../middlewares/common.middleware";
import { userMiddleware } from "../middlewares/user.middleware";
import { UserValidator } from "../validators/user.validator";

const router = Router();

router.get("/", userController.getAll);

router.post(
  "/",
  commonMiddleware.isBodyValid(UserValidator.create),
  userController.create,
);

router.get(
  "/:userId",
  commonMiddleware.isIdValid,
  userMiddleware.isUserExist,
  userController.getById,
);

router.put(
  "/:userId",
  commonMiddleware.isIdValid,
  userMiddleware.isUserExist,
  commonMiddleware.isBodyValid(UserValidator.update),
  userController.updateById,
);

router.delete(
  "/:userId",
  commonMiddleware.isIdValid,
  userMiddleware.isUserExist,
  userController.deleteById,
);

export const userRouter = router;
