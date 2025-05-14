import { LastPalletDistributionRepository } from '../../domain/ports/lastPalletDistributionRepository';
import { LastPalletDistribution } from '../../domain/models/lastPalletDistribution.model';

export class GetLastPalletDistributionService {
  constructor(private repository: LastPalletDistributionRepository) {}

  async execute(): Promise<LastPalletDistribution | null> {
    return await this.repository.getLastPalletDistribution();
  }
}