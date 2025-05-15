import { PalletDistribucionUpdateTemperatura } from "../models/PalletDistribucionUpdateTemperatura.model";

export interface PalletDistribucionUpdateTemperaturaRepository {
  updateTemperatura(data: PalletDistribucionUpdateTemperatura): Promise<void>;
}