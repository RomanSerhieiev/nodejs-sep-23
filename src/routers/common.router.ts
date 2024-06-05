import { Router } from "express";

import { commonController } from "../controllers/common.controller";

const router = Router();

router.get("/", commonController.get);

export const commonRouter = router;
