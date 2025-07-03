import { LoteLineaProduccionSelect } from '../models/LoteLineaProduccionSelect';

export interface LoteLineaProduccionSelectByIdRepository {
  selectById(idLote: number): Promise<LoteLineaProduccionSelect[]>;
}