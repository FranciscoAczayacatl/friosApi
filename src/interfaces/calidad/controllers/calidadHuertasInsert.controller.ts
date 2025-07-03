import { Request, Response } from "express";
import { CalidadHuertasInsertRepositoryImpl } from "../../../infrastructure/db/calidad/mssql/calidadHuertasInsertRepositoryImpl";
import { CalidadHuertasInsertService } from "../../../application/calidad/services/calidadHuertasInsert.service";


const repository = new CalidadHuertasInsertRepositoryImpl();
const service = new CalidadHuertasInsertService(repository);

export const calidadHuertasInsertHandler = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    await service.execute(data);
    res.status(201).json({ message: "Insert successful" });
  } catch (error) {
    console.error("Insert error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};