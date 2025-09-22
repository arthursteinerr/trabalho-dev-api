//Arthur Steiner Morais Silva

import { Router } from "express";
import { getUserById } from "../controller/userController";
import { getUsersByAgeRange } from "../controller/userController";
import { updateUserPut } from "../controller/userController";
import { cleanupInactiveUsers } from "../controller/userController";

const router = Router();

router.get("/:id", getUserById);
router.get("/age-range/filter", getUsersByAgeRange);
router.put("/:id", updateUserPut);
router.delete("/cleanup-inactive", cleanupInactiveUsers);

export default router;