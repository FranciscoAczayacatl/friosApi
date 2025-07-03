import { PalletDistribucionInsert } from "../models/PalletDistribucionInsert.model";

export interface PalletDistribucionInsertRepository {
  insert(data: PalletDistribucionInsert): Promise<void>;
}