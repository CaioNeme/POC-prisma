export type User = {
  id?: number;
  name: string;
  email: string;
  password: string;
};

export type RegisterUser = Omit<User, "id">;
