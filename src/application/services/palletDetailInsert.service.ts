import { palletDetailInsert } from "../../domain/models/InsertPalletsDetail.model";
import { palletDetailInsertRepository } from "../../domain/ports/paletDetailInsertRepository";

export class palletDetailInsertService{
  constructor(private repository: palletDetailInsertRepository){}

  async execute(pallet:palletDetailInsert): Promise<void>{
    await this.repository.insertPalletDetail(pallet);
  }
}