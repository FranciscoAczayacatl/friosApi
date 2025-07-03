import { PalletDistribucionRepository } from "../../../domain/frios/ports/PalletDistribucionRepository";
import { PalletDistribucion } from "../../../domain/frios/models/palletDistribucion.model";

export class ObtenerPalletDistribucionService {
  constructor(private repo: PalletDistribucionRepository) {}

  async execute(idPallet: number): Promise<PalletDistribucion[]> {
    return await this.repo.getByPalletId(idPallet);
  }
}