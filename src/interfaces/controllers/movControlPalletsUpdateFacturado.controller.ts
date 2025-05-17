import { Request, Response } from "express";
import { MovControlPalletsUpdateFacturadoRepositoryImpl } from "../../infrastructure/db/mssql/movControlPalletsUpdateFacturado.repository.impl";
import { MovControlPalletsUpdateFacturadoService } from "../../application/services/movControlPalletsUpdateFacturado.service";

export const movControlPalletsUpdateFacturadoHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid IdNoPallet" });

  const repository = new MovControlPalletsUpdateFacturadoRepositoryImpl();
  const service = new MovControlPalletsUpdateFacturadoService(repository);

  try {
    await service.execute(id, 1);
    res.json({ message: "Facturado updated successfully" });
  } catch (error) {
    console.error("Error updating facturado:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};