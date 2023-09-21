import Joi from "joi";
import { RegisterUser } from "@/protocols/users.protocols";

export const registerSchema = Joi.object<RegisterUser>({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
