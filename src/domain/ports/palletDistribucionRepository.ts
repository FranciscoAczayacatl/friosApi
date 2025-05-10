import { PalletDistribucion } from "../models/palletDistribucion.model";

export interface PalletDistribucionRepository {
  getByPalletId(idPallet: number): Promise<PalletDistribucion[]>;
}
