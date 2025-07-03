import { PalletDistribucions } from "../models/PalletDistribucion";

export interface PalletDistribucionSelectByIdRepository {
  selectByIdsd(id: number): Promise<PalletDistribucions | null>;
}