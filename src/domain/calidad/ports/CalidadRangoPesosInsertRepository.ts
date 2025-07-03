import { CalidadRangoPesosInsert } from '../models/CalidadRangoPesosInsert';

export interface CalidadRangoPesosInsertRepository {
  insert(): Promise<CalidadRangoPesosInsert>;
}