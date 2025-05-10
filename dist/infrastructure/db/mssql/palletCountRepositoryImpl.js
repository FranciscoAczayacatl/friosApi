import sql from "mssql";
import { config } from "../share/dbConfig";
export class PalletCountRepositoryImpl {
    async getCountByPalletId(idPallet) {
        const pool = await sql.connect(config);
        const result = await pool
            .request()
            .input("IdPallet", sql.Int, idPallet)
            .execute("APP_Conteo_Total_Pallets_Select");
        return result.recordset;
    }
}
