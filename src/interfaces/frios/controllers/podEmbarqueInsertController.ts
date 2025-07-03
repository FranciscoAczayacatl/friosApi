import { Request, Response } from "express";
import { PodEmbarqueInsertRepositoryImpl } from "../../../infrastructure/db/frios/mssql/podEmbarqueInsertRepositoryImpl";
import { PodEmbarqueInsertService } from "../../../application/frios/services/podEmbarqueInsert.service";
import { PodEmbarqueInsert } from "../../../domain/frios/models/podEmbarqueInsert.model";

export const podEmbarqueInsertHandler = async (req: Request, res: Response) => {
  const data = req.body as PodEmbarqueInsert;

  const repository = new PodEmbarqueInsertRepositoryImpl();
  const service = new PodEmbarqueInsertService(repository);

  try {
    const result = await service.execute(data);
    res.status(200).json(result);
  } catch (error) {
    console.error("Error al insertar/actualizar embarque:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};