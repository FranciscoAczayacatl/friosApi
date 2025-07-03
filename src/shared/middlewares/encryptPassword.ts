import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

export const encryptPasswordMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.body.Contraseña) {
      return res.status(400).json({ message: "Password is required" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.Contraseña, saltRounds);
    req.body.Contraseña = hashedPassword;
    next();
  } catch (error) {
    console.error("Password encryption error:", error);
    res.status(500).json({ message: "Failed to encrypt password" });
  }
};