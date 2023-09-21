import { User } from "@/protocols/users.protocols";
import { usersRepository } from "@/repositories/users.repository";

async function registerUser(
  name: string,
  email: string,
  password: string
): Promise<void> {
  if (!name || !email || !password) {
    throw { type: "badRequest", message: "Dados inválidos" };
  }

  await usersRepository.registerUser(name, email, password);
}
async function getAllUsers(): Promise<User[]> {
  const users = await usersRepository.getAllUsers();
  return users;
}

async function deleteUser(id: number): Promise<void> {
  await usersRepository.deleteUser(id);
}

async function updateUser(
  id: number,
  name: string,
  email: string,
  password: string
) {
  await usersRepository.updateUser(id, name, email, password);
}

export const registerService = {
  registerUser,
  getAllUsers,
  deleteUser,
  updateUser,
};
