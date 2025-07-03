import { Request, Response } from "express";
import { MovControlPalletsDateSelectByIdRepositoryImpl } from "../../../infrastructure/db/frios/mssql/movControlPalletsDateSelectById.repository.impl";
import { MovControlPalletsDateSelectByIdService } from "../../../application/frios/services/movControlPalletsDateSelectById.service";

export const movControlPalletsDateSelectByIdHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid IdNoPallet" });

  const repository = new MovControlPalletsDateSelectByIdRepositoryImpl();
  const service = new MovControlPalletsDateSelectByIdService(repository);

  try {
    const result = await service.execute(id);
    if (!result) return res.status(404).json({ message: "Fecha no encontrada" });

    res.json(result);
  } catch (error) {
    console.error("Error fetching fecha:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};