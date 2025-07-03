import { LotesAbiertos } from '../models/lotesAbiertos.model';

export interface LotesAbiertosRepository {
  getRecentLotes(): Promise<LotesAbiertos[]>;
}