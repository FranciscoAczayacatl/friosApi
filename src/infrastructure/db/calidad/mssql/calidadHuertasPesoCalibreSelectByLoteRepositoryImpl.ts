import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadHuertasPesoCalibreSelectByLoteRepository } from '../../../../domain/calidad/ports/CalidadHuertasPesoCalibreSelectByLoteRepository';
import { CalidadHuertasPesoCalibreSelect } from '../../../../domain/calidad/models/CalidadHuertasPesoCalibreSelect';

export class CalidadHuertasPesoCalibreSelectByLoteRepositoryImpl implements CalidadHuertasPesoCalibreSelectByLoteRepository {
  async selectByLote(idLote: number): Promise<CalidadHuertasPesoCalibreSelect[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input('IdLote', sql.Int, idLote)
        .query(`
          SELECT IdHuertasPesoCalibre, IdLote, Peso, Calibre, Marca
          FROM TTS_App.dbo.APP_Calidad_HuertasPesoCalibre
          WHERE IdLote = @IdLote
        `);

      return result.recordset as CalidadHuertasPesoCalibreSelect[];
    } catch (error) {
      console.error('Error fetching peso/calibre por lote:', error);
      throw new Error('Failed to fetch peso/calibre');
    }
  }
}