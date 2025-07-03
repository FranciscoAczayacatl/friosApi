import { Pallet } from '../../../domain/frios/models/Pallet';
import { PalletRepository } from '../../../domain/frios/ports/palletRepository';

export class InsertPalletService {
  constructor(private repository: PalletRepository) {}

  async execute(pallet: Pallet): Promise<void> {
    await this.repository.insertPallet(pallet);
  }
}