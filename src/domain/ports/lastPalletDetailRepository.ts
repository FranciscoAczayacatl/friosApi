import { LastPalletDetail } from '../models/lastPalletDetail.model';

export interface LastPalletDetailRepository {
  getLastPalletDetail(): Promise<LastPalletDetail | null>;
}