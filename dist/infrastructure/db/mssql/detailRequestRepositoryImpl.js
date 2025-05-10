import sql from 'mssql';
import { config } from '../share/dbConfig';
export class DetailRequestRepositoryImpl {
    async getByPedidoId(idPedido) {
        const pool = await sql.connect(config);
        const result = await pool
            .request()
            .input('IdPedido', sql.Int, idPedido)
            .execute('APP_Detalle_Pedido_Select');
        return result.recordset;
    }
}
