import { Pallet } from '../../domain/models/Pallet';
import { PalletRepository } from '../../domain/ports/palletRepository';

export class InsertPalletService {
  constructor(private repository: PalletRepository) {}

  async execute(pallet: Pallet): Promise<void> {
    await this.repository.insertPallet(pallet);
  }
}