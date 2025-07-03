import { LastPalletDistribution } from '../models/lastPalletDistribution.model';

export interface LastPalletDistributionRepository {
  getLastPalletDistribution(): Promise<LastPalletDistribution | null>;
}