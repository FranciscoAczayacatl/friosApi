import { CalidadCategoriaSelect } from '../models/CalidadCategoriaSelect';

export interface CalidadCategoriaSelectRepository {
  getAll(): Promise<CalidadCategoriaSelect[]>;
}