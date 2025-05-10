import { PalletCaliber } from "../../domain/models/palletCalibers.model";
import { PalletCalibersRepository } from "../../domain/ports/palletCalibersRepository";

export class GetPalletCalibersByPedidoService {
  constructor(private repository: PalletCalibersRepository) {}

  async execute(idPedido: number): Promise<PalletCaliber[]> {
    return await this.repository.getByPedidoId(idPedido);
  }
}