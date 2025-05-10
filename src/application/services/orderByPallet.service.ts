import { OrderByPalletRepository } from "../../domain/ports/orderByPalletRepository";
import { OrderByPallet } from "../../domain/models/orderByPallet.model";

export class GetOrderByPalletIdService {
  constructor(private repo: OrderByPalletRepository) {}

  async execute(idPallet: number): Promise<OrderByPallet | null> {
    return await this.repo.getOrderByPalletId(idPallet);
  }
}