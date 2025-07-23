import { CalidadRangoPesosById } from '../models/CalidadRangoPesosById';

export interface CalidadRangoPesosByIdRepository {
  getById(id: number): Promise<CalidadRangoPesosById | null>;
}