import { CalidadHuertasData } from "../models/calidadHuertasData.model";

export interface CalidadHuertasDataRepository {
  getAll(): Promise<CalidadHuertasData[]>;
}
