import { CalidadHuertasPesoCalibreInsertRepository } from '../../../domain/calidad/ports/CalidadHuertasPesoCalibreInsertRepository';
import { CalidadHuertasPesoCalibre } from '../../../domain/calidad/models/CalidadHuertasPesoCalibre';

export class CalidadHuertasPesoCalibreInsertService {
  constructor(private repository: CalidadHuertasPesoCalibreInsertRepository) {}

  async execute(data: CalidadHuertasPesoCalibre): Promise<CalidadHuertasPesoCalibre> {
    return await this.repository.insert(data);
  }
}