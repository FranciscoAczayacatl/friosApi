import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadPorcentajeGeneralDanosInsertRepository } from '../../../../domain/calidad/ports/CalidadPorcentajeGeneralDanosInsertRepository';
import { CalidadPorcentajeGeneralDanosInsert } from '../../../../domain/calidad/models/CalidadPorcentajeGeneralDanosInsert';

export class CalidadPorcentajeGeneralDanosInsertRepositoryImpl implements CalidadPorcentajeGeneralDanosInsertRepository {
  async insert(data: CalidadPorcentajeGeneralDanosInsert): Promise<void> {
    const pool = await sql.connect(config);
    await pool.request()
      .input('IdLote', sql.Int, data.IdLote)
      .input('Trips', sql.VarChar, data.Trips)
      .input('Rona', sql.VarChar, data.Rona)
      .input('Golpe', sql.VarChar, data.Golpe)
      .input('Rozadura', sql.VarChar, data.Rozadura)
      .input('Varicela', sql.VarChar, data.Varicela)
      .input('Clavo', sql.VarChar, data.Clavo)
      .input('Alga', sql.VarChar, data.Alga)
      .input('Escama', sql.VarChar, data.Escama)
      .input('Granizo', sql.VarChar, data.Granizo)
      .input('Gusano', sql.VarChar, data.Gusano)
      .input('Quemadura', sql.VarChar, data.Quemadura)
      .input('Sunblotch', sql.VarChar, data.Sunblotch)
      .input('IdHuertasPesoCalibre', sql.Int, data.IdHuertasPesoCalibre)
      .query(`
        INSERT INTO TTS_App.dbo.APP_Calidad_PorcentajeGeneralDaños
        (IdLote, Trips, Roña, Golpe, Rozadura, Varicela, Clavo, Alga, Escama, Granizo, Gusano, Quemadura, Sunblotch, IdHuertasPesoCalibre)
        VALUES (@IdLote, @Trips, @Rona, @Golpe, @Rozadura, @Varicela, @Clavo, @Alga, @Escama, @Granizo, @Gusano, @Quemadura, @Sunblotch, @IdHuertasPesoCalibre)
      `);
  }
}