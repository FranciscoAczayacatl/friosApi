import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadRangoPesosInsertRepository } from '../../../../domain/calidad/ports/CalidadRangoPesosInsertRepository';
import { CalidadRangoPesosInsert } from '../../../../domain/calidad/models/CalidadRangoPesosInsert';

export class CalidadRangoPesosInsertRepositoryImpl implements CalidadRangoPesosInsertRepository {
  async insert(): Promise<CalidadRangoPesosInsert> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().query(`
      DECLARE @output TABLE (
        IdRangoPesos INT,
        Fecha DATETIME,
        Cal32 VARCHAR(50),
        Cal36 VARCHAR(50),
        Cal40 VARCHAR(50),
        Cal48 VARCHAR(50),
        Cal60 VARCHAR(50),
        Cal70 VARCHAR(50),
        Cal84 VARCHAR(50)
      );

      INSERT INTO APP_Calidad_RangoPesos (
        Fecha, Cal32, Cal36, Cal40, Cal48, Cal60, Cal70, Cal84
      )
      OUTPUT inserted.IdRangoPesos, inserted.Fecha, inserted.Cal32, inserted.Cal36,
            inserted.Cal40, inserted.Cal48, inserted.Cal60, inserted.Cal70,
            inserted.Cal84
      INTO @output
      VALUES (
        GETDATE(), '', '', '', '', '', '', ''
      );

      SELECT * FROM @output;
    `);

      return result.recordset[0] as CalidadRangoPesosInsert;
    } catch (error) {
      console.error('Error inserting rango pesos:', error);
      throw new Error('Failed to insert CalidadRangoPesos');
    }
  }
}