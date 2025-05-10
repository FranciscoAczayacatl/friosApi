import sql from "mssql";
import { config } from "../share/dbConfig";
export class PalletCalibersRepositoryImpl {
    async getByPedidoId(idPedido) {
        const pool = await sql.connect(config);
        const result = await pool
            .request()
            .input("IdPedido", sql.Int, idPedido)
            .execute("APP_Palets_Calibres_Select");
        return result.recordset;
    }
}
