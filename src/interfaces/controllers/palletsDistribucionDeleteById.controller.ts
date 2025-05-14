import { Request, Response } from "express";
import { PalletsDistribucionDeleteByIdRepositoryImpl } from "../../infrastructure/db/mssql/palletsDistribucionDeleteById.repository.impl";
import { PalletsDistribucionDeleteByIdService } from "../../application/services/palletsDistribucionDeleteById.service";
import { DeletePalletDetalleByDistribucionId_SPDeletedRepositoryImpl } from "../../infrastructure/db/mssql/deletePalletDetalleByDistribucionId_SPDeleted.repository.impl";
import { PalletsDetalleDeleteByDistribucionIdService } from "../../application/services/palletsDetalleDeleteByDistribucionId.service";
import { PalletDistribucionSelectByIdRepositoryImpl } from "../../infrastructure/db/mssql/palletDistribucionSelectByIdRepositoryImpl";
import { PalletDistribucionSelectByIdService } from "../../application/services/palletDistribucionSelectById.service";
import { PalletPCKSelectService } from "../../application/services/palletPCKSelect.service";
import { PalletPCKSelectRepositoryImpl } from "../../infrastructure/db/mssql/palletPCKSelect.repository.impl";
import { UpdatePalletRepositoryImpl } from "../../infrastructure/db/mssql/updatePalletRepositoryImpl";
import { UpdatePalletService } from "../../application/services/updatePallet.service";

export const palletsDistribucionDeleteByIdHandler = async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const IdPallet= Number(req.params.IdPallet);
  if (isNaN(id)) return res.status(400).json({ message: "Invalid ID" });

  const PalletDistribucionSelectByIdRepositoryImplrepo = new PalletDistribucionSelectByIdRepositoryImpl();
    const palletDistribucionSelectByIdService = new PalletDistribucionSelectByIdService(PalletDistribucionSelectByIdRepositoryImplrepo)

  const DeletePalletDetalleByDistribucionId_SPDeletedRepositoryImplrepo = new DeletePalletDetalleByDistribucionId_SPDeletedRepositoryImpl();
  const palletsDetalleDeleteByDistribucionIdService = new PalletsDetalleDeleteByDistribucionIdService(DeletePalletDetalleByDistribucionId_SPDeletedRepositoryImplrepo);

  const PalletsDistribucionDeleteByIdRepositoryImplrepo = new PalletsDistribucionDeleteByIdRepositoryImpl();
  const palletsDistribucionDeleteByIdService = new PalletsDistribucionDeleteByIdService(PalletsDistribucionDeleteByIdRepositoryImplrepo);

  const PalletPCKSelectRepositoryImplrepo = new PalletPCKSelectRepositoryImpl();
  const palletPCKSelectService = new PalletPCKSelectService(PalletPCKSelectRepositoryImplrepo);

  const UpdatePalletRepositoryImplrepo = new UpdatePalletRepositoryImpl();
  const updatePalletService = new UpdatePalletService(UpdatePalletRepositoryImplrepo);

  try {
    const data = await  palletDistribucionSelectByIdService.execute(id)

    //APP_MOV_PalletsDetalle_Deleted
    await palletsDetalleDeleteByDistribucionIdService.execute(id);

    //APP_MOV_PalletsDistribucion_Deleted
    await palletsDistribucionDeleteByIdService.execute(id);

    const dataPCK = await palletPCKSelectService.execute(Number(IdPallet));

    const newCountr = {
        Pallets: (dataPCK[0]?.Pallets ?? 0) - (1),
        Cajas: (dataPCK[0]?.Cajas ?? 0) - (data?.Cajas ?? 0),
        Kilogramos: (dataPCK[0]?.Kilogramos ?? 0) - (data?.Kilogramos ?? 0),
        IdPallet
      }
    await updatePalletService .execute(newCountr);
    res.status(200).json({ message: "PalletsDistribucion deleted successfully", newCountr});
  } catch (error) {
    console.error("Error deleting PalletsDistribucion:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};