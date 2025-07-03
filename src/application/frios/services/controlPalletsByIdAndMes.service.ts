import { ControlPalletsExistsByIdAndMesRepository } from "../../../domain/frios/ports/controlPalletsByIdAndMesRepository";
import { ControlPalletsByIdAndMes } from "../../../domain/frios/models/controlPalletsByIdAndMes.model";

export class ControlPalletsExistsByIdAndMesService {
  constructor(private repository: ControlPalletsExistsByIdAndMesRepository) {}

  async execute(idNoPallet: number, idMes: number): Promise<boolean> {
    return await this.repository.existsByIdAndMes(idNoPallet, idMes);
  }
}