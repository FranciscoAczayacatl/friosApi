import { Request, Response } from "express";
import { ClientNameRepositoryImpl } from "../../../infrastructure/db/calidad/mssql/clientNameRepositoryImpl";
import { ClientNameService } from "../../../application/calidad/services/clientName.service";

export const getClientNamesHandler = async (req: Request, res: Response) => {
  const repository = new ClientNameRepositoryImpl();
  const service = new ClientNameService(repository);

  try {
    const names = await service.execute();
    res.json(names);
  } catch (error) {
    console.error("Error getting client names:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};