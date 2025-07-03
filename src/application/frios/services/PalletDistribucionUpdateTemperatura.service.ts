import { PalletDistribucionUpdateTemperaturaRepository } from "../../../domain/frios/ports/PalletDistribucionUpdateTemperaturaRepository";
import { PalletDistribucionUpdateTemperatura } from "../../../domain/frios/models/PalletDistribucionUpdateTemperatura.model";

export class PalletDistribucionUpdateTemperaturaService {
  constructor(private repository: PalletDistribucionUpdateTemperaturaRepository) {}

  async execute(data: PalletDistribucionUpdateTemperatura): Promise<void> {
    await this.repository.updateTemperatura(data);
  }
}