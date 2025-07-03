import { PalletPCKSelectRepository } from '../../../domain/frios/ports/palletPCKSelect.repository';

export class PalletPCKSelectService {
  constructor(private readonly repository: PalletPCKSelectRepository) {}

  async execute(idPallet: number) {
    return this.repository.select(idPallet);
  }
}