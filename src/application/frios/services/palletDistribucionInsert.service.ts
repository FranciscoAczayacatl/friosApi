import { PalletDistribucionInsert } from "../../../domain/frios/models/PalletDistribucionInsert.model";
import { PalletDistribucionInsertRepository } from "../../../domain/frios/ports/palletDistribucionInsertRepository";

export class PalletDistribucionInsertService {
  constructor(private repo: PalletDistribucionInsertRepository) {}

  async execute(data: PalletDistribucionInsert): Promise<void> {
    await this.repo.insert(data);
  }
}