import { PalletCount } from "../models/palletCount.model";

export interface PalletCountRepository {
  getCountByPalletId(idPallet: number): Promise<PalletCount[]>;
}