import { LastPalletDetailRepository } from '../../domain/ports/lastPalletDetailRepository';
import { LastPalletDetail } from '../../domain/models/lastPalletDetail.model';

export class GetLastPalletDetailService {
  constructor(private repository: LastPalletDetailRepository) {}

  async execute(): Promise<LastPalletDetail | null> {
    return await this.repository.getLastPalletDetail();
  }
}