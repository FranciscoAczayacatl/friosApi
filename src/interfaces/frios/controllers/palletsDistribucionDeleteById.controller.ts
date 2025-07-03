import { Request, Response } from "express";
import { PalletsDistribucionDeleteByIdRepositoryImpl } from "../../../infrastructure/db/frios/mssql/palletsDistribucionDeleteById.repository.impl";
import { PalletsDistribucionDeleteByIdService } from "../../../application/frios/services/palletsDistribucionDeleteById.service";
import { DeletePalletDetalleByDistribucionId_SPDeletedRepositoryImpl } from "../../../infrastructure/db/frios/mssql/deletePalletDetalleByDistribucionId_SPDeleted.repository.impl";
import { PalletsDetalleDeleteByDistribucionIdService } from "../../../application/frios/services/palletsDetalleDeleteByDistribucionId.service";
import { PalletDistribucionSelectByIdRepositoryImpl } from "../../../infrastructure/db/frios/mssql/palletDistribucionSelectByIdRepositoryImpl";
import { PalletDistribucionSelectByIdService } from "../../../application/frios/services/palletDistribucionSelectById.service";
import { PalletPCKSelectService } from "../../../application/frios/services/palletPCKSelect.service";
import { PalletPCKSelectRepositoryImpl } from "../../../infrastructure/db/frios/mssql/palletPCKSelect.repository.impl";
import { UpdatePalletRepositoryImpl } from "../../../infrastructure/db/frios/mssql/updatePalletRepositoryImpl";
import { UpdatePalletService } from "../../../application/frios/services/updatePallet.service";

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


    await palletsDetalleDeleteByDistribucionIdService.execute(id);


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