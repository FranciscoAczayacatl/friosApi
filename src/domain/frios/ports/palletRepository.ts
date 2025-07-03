import { Pallet } from '../models/Pallet';

export interface PalletRepository {
  insertPallet(pallet: Pallet): Promise<void>;
}