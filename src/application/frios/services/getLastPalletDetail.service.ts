import { LastPalletDetailRepository } from '../../../domain/frios/ports/lastPalletDetailRepository';
import { LastPalletDetail } from '../../../domain/frios/models/lastPalletDetail.model';

export class GetLastPalletDetailService {
  constructor(private repository: LastPalletDetailRepository) {}

  async execute(): Promise<LastPalletDetail | null> {
    return await this.repository.getLastPalletDetail();
  }
}