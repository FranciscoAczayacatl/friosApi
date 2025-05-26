import { Request, Response } from "express";
import { MovPalletsDetalleSearchRepositoryImpl } from "../../infrastructure/db/mssql/movPalletsDetalleSearch.repository.impl";
import { MovPalletsDetalleSearchService } from "../../application/services/movPalletsDetalleSearch.service";

export const movPalletsDetalleSearchHandler = async (req: Request, res: Response) => {
  const idNoPallet = Number(req.query.idNoPallet);
  const idPallet = Number(req.query.idPallet);

  if (isNaN(idNoPallet) || isNaN(idPallet)) {
    return res.status(400).json({ found: false, message: "Invalid parameters" });
  }

  const repository = new MovPalletsDetalleSearchRepositoryImpl();
  const service = new MovPalletsDetalleSearchService(repository);

  try {
    const found = await service.execute(idNoPallet, idPallet);
    res.json({ found });
  } catch (error) {
    console.error("Error searching MOV_PalletsDetalle:", error);
    res.status(500).json({ found: false, message: "Internal server error" });
  }
};