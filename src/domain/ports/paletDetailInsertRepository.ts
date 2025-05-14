import { palletDetailInsert } from "../models/InsertPalletsDetail.model";

export interface palletDetailInsertRepository{
  insertPalletDetail(pallet: palletDetailInsert): Promise<void>;
}