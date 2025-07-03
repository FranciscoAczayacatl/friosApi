import { Request, Response } from "express";
import { CalidadHuertasClientesDeleteRepositoryImpl } from "../../../infrastructure/db/calidad/mssql/calidadHuertasClientesDeleteRepositoryImpl";
import { CalidadHuertasClientesDeleteService } from "../../../application/calidad/services/calidadHuertasClientesDelete.service";

export const calidadHuertasClientesDeleteHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid IdHuertaCliente" });
  }

  const repository = new CalidadHuertasClientesDeleteRepositoryImpl();
  const service = new CalidadHuertasClientesDeleteService(repository);

  try {
    await service.execute(id);
    res.status(200).json({ message: "Registro eliminado correctamente" });
  } catch (error) {
    console.error("Error deleting HuertaCliente:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};