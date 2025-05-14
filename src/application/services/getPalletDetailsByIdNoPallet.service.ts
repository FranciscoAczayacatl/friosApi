import { PalletDetailByIdNoPallet } from '../../domain/models/palletDetailByIdNoPallet.model';
import { PalletDetailByIdNoPalletRepository } from '../../domain/ports/palletDetailByIdNoPalletRepository';

export class GetPalletDetailsByIdNoPalletService {
  constructor(private repository: PalletDetailByIdNoPalletRepository) {}

  async execute(idNoPallet: number): Promise<PalletDetailByIdNoPallet[]> {
    return await this.repository.getDetailsByIdNoPallet(idNoPallet);
  }
}