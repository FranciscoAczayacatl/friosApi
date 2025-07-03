import { CalidadMarcasSelect } from '../models/CalidadMarcasSelect';

export interface CalidadMarcasSelectRepository {
  getAll(): Promise<CalidadMarcasSelect[]>;
}