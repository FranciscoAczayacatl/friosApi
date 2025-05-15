import { Request, Response } from "express";
import { PalletDistribucionUpdateTemperaturaRepositoryImpl } from "../../infrastructure/db/mssql/PalletDistribucionUpdateTemperaturaRepositoryImpl";
import { PalletDistribucionUpdateTemperaturaService } from "../../application/services/PalletDistribucionUpdateTemperatura.service";

export const palletDistribucionUpdateTemperaturaHandler = async (req: Request, res: Response) => {
  const data = req.body;



  const repository = new PalletDistribucionUpdateTemperaturaRepositoryImpl();
  const service = new PalletDistribucionUpdateTemperaturaService(repository);
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  try {
    for (const element of data) {
      const data = {
        Temperatura:element.Temperatura,
        IdPalletDistribucion:element.IdPalletDistribucion
      }

      await service.execute(data);
    }
    // 
    res.status(200).json({ message: "Temperatura updated successfully" });
  } catch (error) {
    console.error("Error updating temperatura:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};