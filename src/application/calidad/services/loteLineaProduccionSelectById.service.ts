import { LoteLineaProduccionSelectByIdRepository } from '../../../domain/calidad/ports/loteLineaProduccionSelectRepository';
import { LoteLineaProduccionSelect } from '../../../domain/calidad/models/LoteLineaProduccionSelect';

export class LoteLineaProduccionSelectByIdService {
  constructor(private repository: LoteLineaProduccionSelectByIdRepository) {}

  async execute(idLote: number): Promise<LoteLineaProduccionSelect[]> {
    return await this.repository.selectById(idLote);
  }
}