import { LastPallet } from '../models/lastPallet.model';

export interface LastPalletRepository {
  getLastPalletByMonthAndYear(month: number, year: number): Promise<LastPallet | null>;
}