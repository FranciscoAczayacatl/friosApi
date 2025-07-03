import { palletDetailInsert } from "../../../domain/frios/models/InsertPalletsDetail.model";
import { palletDetailInsertRepository } from "../../../domain/frios/ports/paletDetailInsertRepository";

export class palletDetailInsertService{
  constructor(private repository: palletDetailInsertRepository){}

  async execute(pallet:palletDetailInsert): Promise<void>{
    await this.repository.insertPalletDetail(pallet);
  }
}