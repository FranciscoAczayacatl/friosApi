import { PalletDistribucionRepository } from "../../domain/ports/PalletDistribucionRepository";
import { PalletDistribucion } from "../../domain/models/palletDistribucion.model";

export class ObtenerPalletDistribucionService {
  constructor(private repo: PalletDistribucionRepository) {}

  async execute(idPallet: number): Promise<PalletDistribucion[]> {
    return await this.repo.getByPalletId(idPallet);
  }
}