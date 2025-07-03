import { CalidadPorcentajeGeneralDanosInsert } from '../models/CalidadPorcentajeGeneralDanosInsert';

export interface CalidadPorcentajeGeneralDanosInsertRepository {
  insert(data: CalidadPorcentajeGeneralDanosInsert): Promise<void>;
}