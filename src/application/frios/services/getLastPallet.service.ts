import { LastPalletRepository } from '../../../domain/frios/ports/lastPalletRepository';
import { LastPallet } from '../../../domain/frios/models/lastPallet.model';

export class GetLastPalletService {
  constructor(private repository: LastPalletRepository) {}

  async execute(month: number, year: number): Promise<LastPallet | null> {
    return await this.repository.getLastPalletByMonthAndYear(month, year);
  }
}