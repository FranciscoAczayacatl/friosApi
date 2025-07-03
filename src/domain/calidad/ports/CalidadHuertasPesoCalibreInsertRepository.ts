import { CalidadHuertasPesoCalibre } from '../models/CalidadHuertasPesoCalibre';

export interface CalidadHuertasPesoCalibreInsertRepository {
  insert(data: CalidadHuertasPesoCalibre): Promise<CalidadHuertasPesoCalibre>;
}