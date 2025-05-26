import { MovControlPalletsDateSelectByIdRepository } from "../../domain/ports/movControlPalletsDateSelectById.repository";
import { MovControlPalletsDate } from "../../domain/models/movControlPalletsDate.model";

export class MovControlPalletsDateSelectByIdService {
  constructor(private repository: MovControlPalletsDateSelectByIdRepository) {}

  async execute(idNoPallet: number): Promise<MovControlPalletsDate | null> {
    return await this.repository.selectById(idNoPallet);
  }
}