import { PalletDetailByIdNoPallet } from '../models/palletDetailByIdNoPallet.model';

export interface PalletDetailByIdNoPalletRepository {
  getDetailsByIdNoPallet(idNoPallet: number): Promise<PalletDetailByIdNoPallet[]>;
}