import sql from "mssql";
import { config } from "../share/dbConfig";
export class SelectedProductsRepositoryImpl {
    async getByPalletId(idPallet) {
        const pool = await sql.connect(config);
        const result = await pool
            .request()
            .input("IdPallet", sql.Int, idPallet)
            .execute("APP_PRODUCTOS_SELECIONADOS_PALLET_SELECIONADO");
        return result.recordset;
    }
}
