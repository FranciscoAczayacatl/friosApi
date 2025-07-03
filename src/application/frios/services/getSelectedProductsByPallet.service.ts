import { SelectedProductsRepository } from "../../../domain/frios/ports/selectedProductsRepository";
import { SelectedProduct } from "../../../domain/frios/models/selectedProducts.model";

export class GetSelectedProductsByPalletService {
  constructor(private repository: SelectedProductsRepository) {}

  async execute(idPallet: number): Promise<SelectedProduct[]> {
    return await this.repository.getByPalletId(idPallet);
  }
}