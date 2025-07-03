import { Request, Response } from "express";
import { ControlPalletsExistsByIdAndMesRepositoryImpl } from "../../../infrastructure/db/frios/mssql/controlPalletsByIdAndMesRepositoryImpl";
import { ControlPalletsExistsByIdAndMesService } from "../../../application/frios/services/controlPalletsByIdAndMes.service";



export const controlPalletsExistsByIdAndMesHandler = async (req: Request, res: Response) => {
  const idNoPallet = Number(req.params.idNoPallet);
  const idMes = Number(req.params.idMes);

  if (isNaN(idNoPallet) || isNaN(idMes)) {
    return res.status(400).json({ message: "Invalid parameters" });
  }

  const repository = new ControlPalletsExistsByIdAndMesRepositoryImpl();
  const service = new ControlPalletsExistsByIdAndMesService(repository);

  try {
    const exists = await service.execute(idNoPallet, idMes);
    res.json({ exists });
  } catch (error) {
    console.error("Error checking existence of ControlPallets:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};