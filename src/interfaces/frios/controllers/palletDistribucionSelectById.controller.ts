import { Request, Response } from "express";
import { PalletDistribucionSelectByIdRepositoryImpl } from "../../../infrastructure/db/frios/mssql/palletDistribucionSelectByIdRepositoryImpl";
import { PalletDistribucionSelectByIdService } from "../../../application/frios/services/palletDistribucionSelectById.service";

export const palletDistribucionSelectByIdHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

  const repository = new PalletDistribucionSelectByIdRepositoryImpl();
  const service = new PalletDistribucionSelectByIdService(repository);

  try {
    const result = await service.execute(id);
    if (!result) return res.status(404).json({ message: "PalletDistribucion not found" });

    res.json(result);
  } catch (error) {
    console.error("Error fetching pallet distribucion by ID:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};