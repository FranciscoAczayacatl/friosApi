import { LastPalletDistributionRepository } from '../../../domain/frios/ports/lastPalletDistributionRepository';
import { LastPalletDistribution } from '../../../domain/frios/models/lastPalletDistribution.model';

export class GetLastPalletDistributionService {
  constructor(private repository: LastPalletDistributionRepository) {}

  async execute(): Promise<LastPalletDistribution | null> {
    return await this.repository.getLastPalletDistribution();
  }
}