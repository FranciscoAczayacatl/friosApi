import { CalidadHuertasSelectByIdLote } from '../models/CalidadHuertasSelectByIdLote';

export interface CalidadHuertasSelectByIdLoteRepository {
  selectByIdLote(idLote: number): Promise<CalidadHuertasSelectByIdLote[]>;
}