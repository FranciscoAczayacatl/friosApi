import { Request, Response } from "express";
import { CalidadHuertasClientesSelectByIdLoteRepositoryImpl } from "../../../infrastructure/db/calidad/mssql/calidadHuertasClientesSelectByIdLoteRepositoryImpl";
import { CalidadHuertasClientesSelectByIdLoteService } from "../../../application/calidad/services/calidadHuertasClientesSelectByIdLote.service";

export const calidadHuertasClientesSelectByIdLoteHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid IdLote" });

  const repository = new CalidadHuertasClientesSelectByIdLoteRepositoryImpl();
  const service = new CalidadHuertasClientesSelectByIdLoteService(repository);

  try {
    const result = await service.execute(id);
    res.json(result);
  } catch (error) {
    console.error("Error fetching APP_Calidad_HuertasClientes by IdLote:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};