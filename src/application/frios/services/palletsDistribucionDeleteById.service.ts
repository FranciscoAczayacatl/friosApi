import { PalletsDistribucionDeleteByIdRepository } from "../../../domain/frios/ports/palletsDistribucionDeleteById.repository";

export class PalletsDistribucionDeleteByIdService {
  constructor(private repository: PalletsDistribucionDeleteByIdRepository) {}

  async execute(id: number): Promise<void> {
    await this.repository.deleteById(id);
  }
}