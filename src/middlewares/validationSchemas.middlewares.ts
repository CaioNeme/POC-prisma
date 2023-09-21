import { NextFunction, Request, Response } from "express";

export default function validateSchema(schema:any):any {
  return (req:Request, res:Response, next:NextFunction) => {
    const validation = schema.validate(req.body, { abortEarly: false });

    if (validation.error) {
      throw { type: "unprocessableEntity", message: "Dados inválidos" };
    }
    next();
  };
}
