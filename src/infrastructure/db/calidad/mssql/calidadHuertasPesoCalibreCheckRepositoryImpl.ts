import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadHuertasPesoCalibreCheckRepository } from '../../../../domain/calidad/ports/CalidadHuertasPesoCalibreCheckRepository';


export class CalidadHuertasPesoCalibreCheckRepositoryImpl implements CalidadHuertasPesoCalibreCheckRepository {
  async existsByLoteAndCalibre(idLote: number, calibrePattern: string, marca:string): Promise<boolean> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input('IdLote', sql.Int, idLote)
        .input('Calibre', sql.VarChar(50), `%${calibrePattern}%`)
        .input('Marca', sql.VarChar(50), marca)
        .query(`
          SELECT 1
          FROM TTS_App.dbo.APP_Calidad_HuertasPesoCalibre
          WHERE IdLote = @IdLote AND Calibre LIKE @Calibre AND Marca=@Marca
        `);

      return result.recordset.length > 0;
    } catch (error) {
      console.error('Error checking Calibre:', error);
      throw new Error('Failed to check Calibre by Lote');
    }
  }
}