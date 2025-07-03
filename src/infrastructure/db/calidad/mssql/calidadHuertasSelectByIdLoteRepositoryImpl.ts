import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadHuertasSelectByIdLoteRepository } from '../../../../domain/calidad/ports/CalidadHuertasSelectByIdLoteRepository';
import { CalidadHuertasSelectByIdLote } from '../../../../domain/calidad/models/CalidadHuertasSelectByIdLote';


export class CalidadHuertasSelectByIdLoteRepositoryImpl implements CalidadHuertasSelectByIdLoteRepository {
  async selectByIdLote(idLote: number): Promise<CalidadHuertasSelectByIdLote[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input('IdLote', sql.Int, idLote)
        .query(`
          SELECT *
          FROM [TTS_App].[dbo].[APP_Calidad_Huertas]
          WHERE IdLote = @IdLote
        `);

      return result.recordset as CalidadHuertasSelectByIdLote[];
    } catch (error) {
      console.error('Error fetching Calidad Huertas por IdLote:', error);
      throw new Error('Failed to fetch Calidad Huertas');
    }
  }
}