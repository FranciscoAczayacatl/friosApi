import { Request, Response } from "express";
import { UserInsertService } from "../../../application/auth/services/userInsert.service";
import { UserInsertRepositoryImpl } from "../../../infrastructure/db/auth/mssql/userInsertRepositoryImpl";

export const userInsertHandler = async (req: Request, res: Response) => {
  const userData = req.body;

  const repository = new UserInsertRepositoryImpl();
  const service = new UserInsertService(repository);

  try {
    await service.execute(userData);
    res.status(201).json({ message: "User inserted successfully" });
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ message: "Failed to insert user" });
  }
};