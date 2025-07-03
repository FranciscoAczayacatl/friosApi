import { CalidadHuertasPesoCalibreSelect } from '../models/CalidadHuertasPesoCalibreSelect';

export interface CalidadHuertasPesoCalibreSelectByLoteRepository {
  selectByLote(idLote: number): Promise<CalidadHuertasPesoCalibreSelect[]>;
}