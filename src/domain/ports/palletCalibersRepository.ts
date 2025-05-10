import { PalletCaliber } from "../models/palletCalibers.model";

export interface PalletCalibersRepository {
  getByPedidoId(idPedido: number): Promise<PalletCaliber[]>;
}