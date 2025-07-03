import { CalidadRangoPesosUpdate } from '../models/CalidadRangoPesosUpdate';

export interface CalidadRangoPesosUpdateRepository {
  update(data: CalidadRangoPesosUpdate): Promise<void>;
}