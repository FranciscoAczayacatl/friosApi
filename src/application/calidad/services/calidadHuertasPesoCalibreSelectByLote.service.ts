import { CalidadHuertasPesoCalibreSelectByLoteRepository } from '../../../domain/calidad/ports/CalidadHuertasPesoCalibreSelectByLoteRepository';
import { CalidadHuertasPesoCalibreSelect } from '../../../domain/calidad/models//CalidadHuertasPesoCalibreSelect';

export class CalidadHuertasPesoCalibreSelectByLoteService {
  constructor(private repository: CalidadHuertasPesoCalibreSelectByLoteRepository) {}

  async execute(idLote: number): Promise<CalidadHuertasPesoCalibreSelect[]> {
    return await this.repository.selectByLote(idLote);
  }
}