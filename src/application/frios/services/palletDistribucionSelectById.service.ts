import { PalletDistribucions } from "../../../domain/frios/models/PalletDistribucion";
import { PalletDistribucionSelectByIdRepository } from "../../../domain/frios/ports/PalletDistribucionSelectByIdRepository";

export class PalletDistribucionSelectByIdService {
  constructor(private repository: PalletDistribucionSelectByIdRepository) {}

  async execute(id: number): Promise<PalletDistribucions | null> {
    return await this.repository.selectByIdsd(id);
  }
}