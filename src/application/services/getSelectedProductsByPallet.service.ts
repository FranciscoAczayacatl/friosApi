import { SelectedProductsRepository } from "../../domain/ports/selectedProductsRepository";
import { SelectedProduct } from "../../domain/models/selectedProducts.model";

export class GetSelectedProductsByPalletService {
  constructor(private repository: SelectedProductsRepository) {}

  async execute(idPallet: number): Promise<SelectedProduct[]> {
    return await this.repository.getByPalletId(idPallet);
  }
}