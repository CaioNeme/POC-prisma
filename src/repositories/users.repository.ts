import { db } from "@/database/database.connection";
import { User } from "@/protocols/users.protocols";

async function registerUser(name: string, email: string, password: string) {
  await db.query(
    `INSERT INTO users (name, email, password) VALUES ($1, $2, $3)`,
    [name, email, password]
  );
}
async function getAllUsers(): Promise<User[]> {
  const users = await db.query(`SELECT * FROM users`);
  return users.rows;
}

async function deleteUser(id: number) {
  await db.query(`DELETE FROM users WHERE id = $1`, [id]);
}

async function updateUser(
  id: number,
  name: string,
  email: string,
  password: string
) {
  await db.query(
    `UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4`,
    [name, email, password, id]
  );
}

export const usersRepository = {
  registerUser,
  getAllUsers,
  deleteUser,
  updateUser,
};
