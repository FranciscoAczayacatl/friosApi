import { Request, Response } from "express";
import { UserLoginRepositoryImpl } from "../../../infrastructure/db/auth/mssql/userLoginRepositoryImpl";
import { UserLoginService } from "../../../application/auth/services/userLogin.service";

const repo = new UserLoginRepositoryImpl();
const service = new UserLoginService(repo);

export const userLoginHandler = async (req: Request, res: Response) => {
  const { Usuario, Contraseña } = req.body;

  if (!Usuario || !Contraseña) {
    return res.status(400).json({ message: "Missing username or password" });
  }

  try {
    const result = await service.execute({ Usuario, Contraseña });

    if (result.Active === 1) {
      if (result.valid) {
      res.status(200).json({ message: "Login successful",ID: result.IdPerfil, valid:result.valid, Id: result.Id});
    } else {
      res.status(400).json({ message: "Invalid credentials" });
    }
    } else {
      res.status(401).json({ message: "usuario inactivo" });
    }

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};