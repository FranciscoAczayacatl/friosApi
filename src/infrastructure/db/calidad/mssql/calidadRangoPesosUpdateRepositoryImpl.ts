import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadRangoPesosUpdateRepository } from '../../../../domain/calidad/ports/CalidadRangoPesosUpdateRepository';
import { CalidadRangoPesosUpdate } from '../../../../domain/calidad/models/CalidadRangoPesosUpdate';

export class CalidadRangoPesosUpdateRepositoryImpl implements CalidadRangoPesosUpdateRepository {
  async update(data: CalidadRangoPesosUpdate): Promise<void> {
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input('IdRangoPesos', sql.Int, data.IdRangoPesos)
        .input('Cal32', sql.VarChar(50), data.Cal32)
        .input('Cal36', sql.VarChar(50), data.Cal36)
        .input('Cal40', sql.VarChar(50), data.Cal40)
        .input('Cal48', sql.VarChar(50), data.Cal48)
        .input('Cal60', sql.VarChar(50), data.Cal60)
        .input('Cal70', sql.VarChar(50), data.Cal70)
        .input('Cal84', sql.VarChar(50), data.Cal84)

        .query(`
          UPDATE APP_Calidad_RangoPesos
          SET Cal32 = @Cal32,
              Cal36 = @Cal36,
              Cal40 = @Cal40,
              Cal48 = @Cal48,
              Cal60 = @Cal60,
              Cal70 = @Cal70,
              Cal84 = @Cal84
          WHERE IdRangoPesos = @IdRangoPesos
        `);
    } catch (error) {
      console.error('Error updating CalidadRangoPesos:', error);
      throw new Error('Failed to update CalidadRangoPesos');
    }
  }
}