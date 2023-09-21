import { Router } from "express";
import usersRouter from "@/routes/users.routes";

const router = Router();

router.use(usersRouter);

export default router;
