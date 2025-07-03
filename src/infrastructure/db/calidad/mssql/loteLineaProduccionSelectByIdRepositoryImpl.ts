import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { LoteLineaProduccionSelect } from '../../../../domain/calidad/models/LoteLineaProduccionSelect';
import { LoteLineaProduccionSelectByIdRepository } from '../../../../domain/calidad/ports/loteLineaProduccionSelectRepository';

export class LoteLineaProduccionSelectByIdRepositoryImpl implements LoteLineaProduccionSelectByIdRepository {
  async selectById(idLote: number): Promise<LoteLineaProduccionSelect[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input('IdLote', sql.Int, idLote)
        .query(`
          SELECT LO.IdLote, LO.IdLineaProduccion, LP.LineaProduccion
          FROM [TTS].[dbo].[MOV_Lotes] LO
          INNER JOIN [TTS].[dbo].[DIV_LineasProduccion] LP ON LO.IdLineaProduccion = LP.IdLineaProduccion
          WHERE LO.IdLote = @IdLote
        `);

      return result.recordset as LoteLineaProduccionSelect[];
    } catch (error) {
      console.error('Error fetching lote linea producción:', error);
      throw new Error('Failed to fetch lote linea producción');
    }
  }
}