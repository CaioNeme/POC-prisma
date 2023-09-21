import { RegisterUser } from "@/protocols/users.protocols";
import { registerService } from "@/services/register.services";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function registerUser(req: Request, res: Response): Promise<void> {
  const { name, email, password } = req.body as RegisterUser;

  await registerService.registerUser(name, email, password);
  res.sendStatus(httpStatus.CREATED);
}

export async function getAllUsers(req: Request, res: Response): Promise<void> {
  const users = await registerService.getAllUsers();

  res.status(httpStatus.OK).send(users);
}

export async function deleteUser(req: Request, res: Response): Promise<void> {
  const { id } = req.params;

  await registerService.deleteUser(Number(id));

  res.status(httpStatus.OK).send("DELETED");
}

export async function updateUser(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { name, email, password } = req.body as RegisterUser;

  await registerService.updateUser(Number(id), name, email, password);

  res.status(httpStatus.OK).send("UPDATED");
}
