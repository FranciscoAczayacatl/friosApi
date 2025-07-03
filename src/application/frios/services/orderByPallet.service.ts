import { OrderByPalletRepository } from "../../../domain/frios/ports/orderByPalletRepository";
import { OrderByPallet } from "../../../domain/frios/models/orderByPallet.model";

export class GetOrderByPalletIdService {
  constructor(private repo: OrderByPalletRepository) {}

  async execute(idPallet: number): Promise<OrderByPallet | null> {
    return await this.repo.getOrderByPalletId(idPallet);
  }
}