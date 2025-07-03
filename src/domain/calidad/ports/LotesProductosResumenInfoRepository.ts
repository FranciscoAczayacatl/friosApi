import { LotesProductosResumenInfo } from '../models/LotesProductosResumenInfo';

export interface LotesProductosResumenInfoRepository {
  getByLoteId(idLote: number): Promise<LotesProductosResumenInfo[]>;
}
