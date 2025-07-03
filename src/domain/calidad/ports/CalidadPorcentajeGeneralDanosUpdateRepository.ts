import { CalidadPorcentajeGeneralDanosUpdate } from '../models/CalidadPorcentajeGeneralDanosUpdate';

export interface CalidadPorcentajeGeneralDanosUpdateRepository {
  update(data: CalidadPorcentajeGeneralDanosUpdate): Promise<void>;
}