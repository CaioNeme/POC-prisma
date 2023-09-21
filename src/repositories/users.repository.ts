import prisma from "@/database/database.connection";
import { User } from "@/protocols/users.protocols";

async function registerUser(name: string, email: string, password: string) {
  const newUser = await prisma.user.create({
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
}
async function getAllUsers(): Promise<User[]> {
  const users = await prisma.user.findMany();
  return users;
}

async function deleteUser(id: number) {
  await prisma.user.delete({
    where: {
      id: id,
    },
  });
}

async function updateUser(
  id: number,
  name: string,
  email: string,
  password: string
) {
  await prisma.user.update({
    where: {
      id: id,
    },
    data: {
      name: name,
      email: email,
      password: password,
    },
  });
}

export const usersRepository = {
  registerUser,
  getAllUsers,
  deleteUser,
  updateUser,
};
