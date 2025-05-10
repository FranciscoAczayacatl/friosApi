import sql from 'mssql';
import { config } from '../share/dbConfig';
export class PalletDistribucionRepositoryImpl {
    async getByPalletId(idPallet) {
        const pool = await sql.connect(config);
        const result = await pool
            .request()
            .input('IdPalet', sql.Int, idPallet)
            .execute('APP_Datos_Palets_Select');
        return result.recordset;
    }
}
