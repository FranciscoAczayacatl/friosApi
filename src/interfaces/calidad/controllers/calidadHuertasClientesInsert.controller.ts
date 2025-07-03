import { Request, Response } from "express";
import { CalidadHuertasClientesInsertRepositoryImpl } from "../../../infrastructure/db/calidad/mssql/calidadHuertasClientesInsertRepositoryImpl";
import { CalidadHuertasClientesInsertService } from "../../../application/calidad/services/calidadHuertasClientesInsert.service";

export const calidadHuertasClientesInsertHandler = async (req: Request, res: Response) => {
  const { Cliente, IdLote } = req.body;

  if (!Cliente || !IdLote) {
    return res.status(400).json({ message: "Cliente and IdLote are required" });
  }

  const repository = new CalidadHuertasClientesInsertRepositoryImpl();
  const service = new CalidadHuertasClientesInsertService(repository);

  try {
    await service.execute({ Cliente, IdLote });
    res.status(201).json({ message: "Cliente inserted successfully" });
  } catch (error) {
    console.error("Error inserting Cliente:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};