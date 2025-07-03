import { Request, Response } from "express";
import { DeletePalletDetalleByDistribucionId_SPDeletedRepositoryImpl } from "../../../infrastructure/db/frios/mssql/deletePalletDetalleByDistribucionId_SPDeleted.repository.impl";
import { PalletsDetalleDeleteByDistribucionIdService } from "../../../application/frios/services/palletsDetalleDeleteByDistribucionId.service";
import { MovControlPalletsUpdateFacturadoRepositoryImpl } from "../../../infrastructure/db/frios/mssql/movControlPalletsUpdateFacturado.repository.impl";
import { MovControlPalletsUpdateFacturadoService } from "../../../application/frios/services/movControlPalletsUpdateFacturado.service";

export const palletsDetalleDeleteByDistribucionIdHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

  

  const repository = new DeletePalletDetalleByDistribucionId_SPDeletedRepositoryImpl();
  const service = new PalletsDetalleDeleteByDistribucionIdService(repository);
  const MovControlPalletsUpdateFacturadoRepositoryImplrepo = new MovControlPalletsUpdateFacturadoRepositoryImpl();
  const movControlPalletsUpdateFacturadoService = new MovControlPalletsUpdateFacturadoService(MovControlPalletsUpdateFacturadoRepositoryImplrepo);
  

  try {
    await service.execute(id);

    await movControlPalletsUpdateFacturadoService.execute(id, 0)
    res.status(200).json({ message: "PalletsDetalle deleted successfully" });
  } catch (error) {
    console.error("Error deleting PalletsDetalle:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};