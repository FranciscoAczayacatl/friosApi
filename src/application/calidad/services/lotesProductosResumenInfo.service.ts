import { LotesProductosResumenInfo } from '../../../domain/calidad/models/LotesProductosResumenInfo';
import { LotesProductosResumenInfoRepository } from '../../../domain/calidad/ports/LotesProductosResumenInfoRepository';

export class LotesProductosResumenInfoService {
  constructor(private repository: LotesProductosResumenInfoRepository) {}

  async execute(idLote: number): Promise<LotesProductosResumenInfo[]> {
    return this.repository.getByLoteId(idLote);
  }
}