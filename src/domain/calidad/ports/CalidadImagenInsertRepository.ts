import { CalidadImagenInsert } from '../models/CalidadImagenInsert';

export interface CalidadImagenInsertRepository {
  insert(data: CalidadImagenInsert): Promise<CalidadImagenInsert>;
}