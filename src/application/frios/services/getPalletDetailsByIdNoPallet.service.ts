import { PalletDetailByIdNoPallet } from '../../../domain/frios/models/palletDetailByIdNoPallet.model';
import { PalletDetailByIdNoPalletRepository } from '../../../domain/frios/ports/palletDetailByIdNoPalletRepository';

export class GetPalletDetailsByIdNoPalletService {
  constructor(private repository: PalletDetailByIdNoPalletRepository) {}

  async execute(idNoPallet: number): Promise<PalletDetailByIdNoPallet[]> {
    return await this.repository.getDetailsByIdNoPallet(idNoPallet);
  }
}