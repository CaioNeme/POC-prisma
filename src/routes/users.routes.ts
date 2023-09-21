import {
  getAllUsers,
  registerUser,
  deleteUser,
  updateUser,
} from "@/controllers/users.controllers";
import validateSchema from "@/middlewares/validationSchemas.middlewares";
import { registerSchema } from "@/schemas/RegisterSchema";
import { Router } from "express";

const usersRouter = Router();

usersRouter.post("/register", validateSchema(registerSchema), registerUser);
usersRouter.get("/users", getAllUsers);
usersRouter.delete("/users/:id", deleteUser);
usersRouter.put("/users/:id", validateSchema(registerSchema), updateUser);

export default usersRouter;
