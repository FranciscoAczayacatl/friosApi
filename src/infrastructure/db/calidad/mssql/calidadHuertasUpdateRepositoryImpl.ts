import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { CalidadHuertasUpdateRepository } from '../../../../domain/calidad/ports/CalidadHuertasUpdateRepository';
import { CalidadHuertasUpdate } from '../../../../domain/calidad/models/CalidadHuertasUpdate';

export class CalidadHuertasUpdateRepositoryImpl implements CalidadHuertasUpdateRepository {
  async update(data: CalidadHuertasUpdate): Promise<void> {
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input('IdLote', sql.Int, data.IdLote)
        .input('VelocidadCepillado', sql.VarChar(50), data.VelocidadCepillado)
        .input('TipoCorte', sql.VarChar(50), data.TipoCorte)
        .input('EstadoFruta', sql.VarChar(50), data.EstadoFruta)
        .input('Observaciones', sql.VarChar(50), data.Observaciones)
        .query(`
          UPDATE TTS_App.dbo.APP_Calidad_Huertas
          SET VelocidadCepillado = @VelocidadCepillado,
              TipoCorte = @TipoCorte,
              EstadoFruta = @EstadoFruta,
              Observaciones = @Observaciones
              
          WHERE IdLote = @IdLote
        `);
    } catch (error) {
      console.error('Error updating calidad huertas:', error);
      throw new Error('Failed to update calidad huertas');
    }
  }
}