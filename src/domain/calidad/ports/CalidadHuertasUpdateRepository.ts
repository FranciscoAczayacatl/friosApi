import { CalidadHuertasUpdate } from '../models/CalidadHuertasUpdate';

export interface CalidadHuertasUpdateRepository {
  update(data: CalidadHuertasUpdate): Promise<void>;
}