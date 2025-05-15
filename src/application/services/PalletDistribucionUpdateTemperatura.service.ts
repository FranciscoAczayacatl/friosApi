import { PalletDistribucionUpdateTemperaturaRepository } from "../../domain/ports/PalletDistribucionUpdateTemperaturaRepository";
import { PalletDistribucionUpdateTemperatura } from "../../domain/models/PalletDistribucionUpdateTemperatura.model";

export class PalletDistribucionUpdateTemperaturaService {
  constructor(private repository: PalletDistribucionUpdateTemperaturaRepository) {}

  async execute(data: PalletDistribucionUpdateTemperatura): Promise<void> {
    await this.repository.updateTemperatura(data);
  }
}