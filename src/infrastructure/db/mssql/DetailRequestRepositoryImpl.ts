import sql from 'mssql';
import { config } from '../share/dbConfig';
import { detailRequestRepository } from '../../../domain/ports/detailRequestRepository';
import { detailRequestR } from '../../../domain/models/detailRequest.model';

export class DetailRequestRepositoryImpl implements detailRequestRepository {
  async getByPedidoId(idPedido: number): Promise<detailRequestR[]> {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input('IdPedido', sql.Int, idPedido)
      .execute('APP_Detalle_Pedido_Select');

    return result.recordset as detailRequestR[];
  }
}
