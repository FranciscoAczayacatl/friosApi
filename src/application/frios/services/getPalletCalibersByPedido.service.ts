import { PalletCaliber } from "../../../domain/frios/models/palletCalibers.model";
import { PalletCalibersRepository } from "../../../domain/frios/ports/palletCalibersRepository";

export class GetPalletCalibersByPedidoService {
  constructor(private repository: PalletCalibersRepository) {}

  async execute(idPedido: number): Promise<PalletCaliber[]> {
    return await this.repository.getByPedidoId(idPedido);
  }
}