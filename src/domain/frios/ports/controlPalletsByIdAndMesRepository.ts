import { ControlPalletsByIdAndMes } from "../models/controlPalletsByIdAndMes.model";

export interface ControlPalletsExistsByIdAndMesRepository {
  existsByIdAndMes(idNoPallet: number, idMes: number): Promise<boolean>;
}