import { PalletCount } from "../../domain/models/palletCount.model";
import { PalletCountRepository } from "../../domain/ports/palletCountRepository";

export class GetPalletCountByIdService {
  constructor(private repository: PalletCountRepository) {}

  async execute(idPallet: number): Promise<PalletCount[]> {
    return await this.repository.getCountByPalletId(idPallet);
  }
}