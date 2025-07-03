import { Request, Response } from "express";
import { PalletCountRepositoryImpl } from "../../../infrastructure/db/frios/mssql/palletCountRepositoryImpl";
import { GetPalletCountByIdService } from "../../../application/frios/services/getPalletCountById.service";

const repo = new PalletCountRepositoryImpl();
const service = new GetPalletCountByIdService(repo);

export const getPalletCountByIdHandler = async (req: Request, res: Response) => {
  const idPallet = parseInt(req.params.idPallet);

  if (isNaN(idPallet)) {
    return res.status(400).json({ message: "IdPallet inválido" });
  }

  try {
    const data = await service.execute(idPallet);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener conteo total del pallet", error });
  }
};