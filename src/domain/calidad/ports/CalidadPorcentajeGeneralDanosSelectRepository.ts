import { CalidadPorcentajeGeneralDanosSelect } from '../models/CalidadPorcentajeGeneralDanosSelect';

export interface CalidadPorcentajeGeneralDanosSelectRepository {
  select(): Promise<CalidadPorcentajeGeneralDanosSelect[]>;
}