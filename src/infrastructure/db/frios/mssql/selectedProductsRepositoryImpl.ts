import { SelectedProductsRepository } from "../../../../domain/frios/ports/selectedProductsRepository";
import { SelectedProduct } from "../../../../domain/frios/models/selectedProducts.model";
import sql from "mssql";
import { config } from "../../share/dbConfig";

export class SelectedProductsRepositoryImpl implements SelectedProductsRepository {
  async getByPalletId(idPallet: number): Promise<SelectedProduct[]> {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input("IdPallet", sql.Int, idPallet)
      .execute("APP_PRODUCTOS_SELECIONADOS_PALLET_SELECIONADO");

    return result.recordset as SelectedProduct[];
  }
}