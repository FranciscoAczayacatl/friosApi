import { UpdatePalletRepository } from '../../domain/ports/updatePalletRepository';
import { UpdatePalletDTO } from '../../domain/models/updatePallet.dto';

export class UpdatePalletService {
  constructor(private readonly repository: UpdatePalletRepository) {}

  async execute(data: UpdatePalletDTO): Promise<void> {
    await this.repository.updatePallet(data);
  }
}