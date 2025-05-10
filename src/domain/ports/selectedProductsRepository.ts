import { SelectedProduct } from "../models/selectedProducts.model";

export interface SelectedProductsRepository {
  getByPalletId(idPallet: number): Promise<SelectedProduct[]>;
}