import { LastPalletRepository } from '../../../domain/ports/lastPalletRepository';
import sql from 'mssql';
import { config } from '../share/dbConfig';
import { LastPallet } from '../../../domain/models/lastPallet.model';

export class LastPalletRepositoryImpl implements LastPalletRepository {
  async getLastPalletByMonthAndYear(month: number, year: number): Promise<LastPallet | null> {
    try {
      const pool = await sql.connect(config);
      const result = await pool
        .request()
        .input('Mes', sql.Int, month)
        .input('Ejercicio', sql.Int, year)
        .execute('APP_Numero_Folio_Select');
  
      return result.recordset[0] ?? null; // Debería retornar el primer pallet, o null si no se encuentra
    } catch (error) {
      console.error('Error executing APP_Numero_Folio_Select:', error);
      throw new Error('Failed to fetch last pallet by month and year');
    }
  }
}