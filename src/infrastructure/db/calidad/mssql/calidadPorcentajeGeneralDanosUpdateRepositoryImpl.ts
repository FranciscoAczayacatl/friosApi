import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadPorcentajeGeneralDanosUpdateRepository } from '../../../../domain/calidad/ports/CalidadPorcentajeGeneralDanosUpdateRepository';
import { CalidadPorcentajeGeneralDanosUpdate } from '../../../../domain/calidad/models/CalidadPorcentajeGeneralDanosUpdate';


export class CalidadPorcentajeGeneralDanosUpdateRepositoryImpl implements CalidadPorcentajeGeneralDanosUpdateRepository {
  async update(data: CalidadPorcentajeGeneralDanosUpdate): Promise<void> {
    const pool = await sql.connect(config);
    await pool.request()
      .input('IdPorcentajeGeneralDanos', sql.Int, data.IdPorcentajeGeneralDanos)
      .input('Trips', sql.VarChar(50), data.Trips)
      .input('Rona', sql.VarChar(50), data.Rona)
      .input('Golpe', sql.VarChar(50), data.Golpe)
      .input('Rozadura', sql.VarChar(50), data.Rozadura)
      .input('Varicela', sql.VarChar(50), data.Varicela)
      .input('Clavo', sql.VarChar(50), data.Clavo)
      .input('Alga', sql.VarChar(50), data.Alga)
      .input('Escama', sql.VarChar(50), data.Escama)
      .input('Granizo', sql.VarChar(50), data.Granizo)
      .input('Gusano', sql.VarChar(50), data.Gusano)
      .input('Quemadura', sql.VarChar(50), data.Quemadura)
      .input('Sunblotch', sql.VarChar(50), data.Sunblotch)
      .query(`
        UPDATE APP_Calidad_PorcentajeGeneralDaños
        SET Trips = @Trips,
            Roña = @Rona,
            Golpe = @Golpe,
            Rozadura = @Rozadura,
            Varicela = @Varicela,
            Clavo = @Clavo,
            Alga = @Alga,
            Escama = @Escama,
            Granizo = @Granizo,
            Gusano = @Gusano,
            Quemadura = @Quemadura,
            Sunblotch = @Sunblotch
        WHERE IdPorcentajeGeneralDaños = @IdPorcentajeGeneralDanos
      `);
  }
}