import { UpdatePalletRepository } from '../../../domain/frios/ports/updatePalletRepository';
import { UpdatePalletDTO } from '../../../domain/frios/models/updatePallet.dto';

export class UpdatePalletService {
  constructor(private readonly repository: UpdatePalletRepository) {}

  async execute(data: UpdatePalletDTO): Promise<void> {
    await this.repository.updatePallet(data);
  }
}