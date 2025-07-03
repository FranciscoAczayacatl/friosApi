import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadHuertasPesoCalibreInsertRepository } from '../../../../domain/calidad/ports/CalidadHuertasPesoCalibreInsertRepository';
import { CalidadHuertasPesoCalibre } from '../../../../domain/calidad/models/CalidadHuertasPesoCalibre';

export class CalidadHuertasPesoCalibreInsertRepositoryImpl implements CalidadHuertasPesoCalibreInsertRepository {
  async insert(data: CalidadHuertasPesoCalibre): Promise<CalidadHuertasPesoCalibre> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input('IdLote', sql.Int, data.IdLote)
        .input('Peso', sql.Decimal(14, 2), data.Peso)
        .input('Calibre', sql.VarChar(50), data.Calibre)
        .input('Marca', sql.VarChar(50), data.Marca)
        .query(`
          INSERT INTO APP_Calidad_HuertasPesoCalibre(IdLote, Peso, Calibre, Marca)
          OUTPUT INSERTED.IdHuertasPesoCalibre, INSERTED.IdLote, INSERTED.Peso, INSERTED.Calibre, INSERTED.Marca
          VALUES (@IdLote, @Peso, @Calibre, @Marca)
        `);

      return result.recordset[0] as CalidadHuertasPesoCalibre;
    } catch (error) {
      console.error('Error inserting CalidadHuertasPesoCalibre:', error);
      throw new Error('Failed to insert CalidadHuertasPesoCalibre');
    }
  }
}