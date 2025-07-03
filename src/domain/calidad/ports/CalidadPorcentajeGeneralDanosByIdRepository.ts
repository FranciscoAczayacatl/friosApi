import { CalidadPorcentajeGeneralDanos } from '../models/CalidadPorcentajeGeneralDanos';

export interface CalidadPorcentajeGeneralDanosByIdRepository {
  getById(id: number): Promise<CalidadPorcentajeGeneralDanos | null>;
}