import { LotesAbiertosRepository } from '../../../domain/calidad/ports/lotesAbiertosRepository';
import { LotesAbiertos } from '../../../domain/calidad/models/lotesAbiertos.model';

export class GetLotesAbiertosService {
  constructor(private repository: LotesAbiertosRepository) {}

  async execute(): Promise<LotesAbiertos[]> {
    return this.repository.getRecentLotes();
  }
}