import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadImagenInsertRepository } from '../../../../domain/calidad/ports/CalidadImagenInsertRepository';
import { CalidadImagenInsert } from '../../../../domain/calidad/models/CalidadImagenInsert';

export class CalidadImagenInsertRepositoryImpl implements CalidadImagenInsertRepository {
  async insert(data: CalidadImagenInsert): Promise<CalidadImagenInsert> {
    try {
      const pool = await sql.connect(config);

      const result = await pool.request()
        .input('IdLote', sql.Int, data.IdLote)
        .input('ImagenBin', sql.VarBinary(sql.MAX), data.ImagenBin)
        .input('Nombre', sql.NVarChar(sql.MAX), data.Nombre)
        .input('Usuario', sql.NVarChar(sql.MAX), data.Usuario)
        .input('IdHuertasPesoCalibre', sql.Int, data.IdHuertasPesoCalibre)
        .query(`
          INSERT INTO [TTS_App].[dbo].[APP_Calida_ImagenesEvidencia] (
            IdLote,
            ImagenBin,
            Nombre,
            Fecha,
            Usuario,
            IdHuertasPesoCalibre
          )
          OUTPUT
            inserted.IdLote,
            inserted.ImagenBin,
            inserted.Nombre,
            inserted.Fecha,
            inserted.Usuario,
            inserted.IdHuertasPesoCalibre
          VALUES (
            @IdLote,
            @ImagenBin,
            @Nombre,
            GETDATE(),
            @Usuario,
            @IdHuertasPesoCalibre
          );
        `);

      return result.recordset[0] as CalidadImagenInsert;
    } catch (error) {
      console.error('Error inserting imagen evidencia:', error);
      throw new Error('Failed to insert imagen evidencia');
    }
  }
}