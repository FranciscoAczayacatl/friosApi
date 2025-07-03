import { Request, Response } from "express";
import { UserNameByIdRepositoryImpl } from "../../../infrastructure/db/auth/mssql/userNameByIdRepositoryImpl";
import { UserNameByIdService } from "../../../application/auth/services/userNameById.service";


export const getUserNameByIdHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

  const repository = new UserNameByIdRepositoryImpl();
  const service = new UserNameByIdService(repository);

  try {
    const result = await service.execute(id);
    if (!result) return res.status(404).json({ message: "User not found" });

    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};