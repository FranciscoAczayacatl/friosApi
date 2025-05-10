import sql from 'mssql';
import { config } from '../share/dbConfig';
export class OrderByPalletRepositoryImpl {
    async getOrderByPalletId(idPallet) {
        const pool = await sql.connect(config);
        const result = await pool
            .request()
            .input('IdPallet', sql.Int, idPallet)
            .execute('APP_PedidoId_Select');
        if (result.recordset.length === 0)
            return null;
        return result.recordset[0];
    }
}
