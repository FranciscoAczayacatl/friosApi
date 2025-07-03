import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { PalletDetailByIdNoPallet } from '../../../../domain/frios/models/palletDetailByIdNoPallet.model';
import { PalletDetailByIdNoPalletRepository } from '../../../../domain/frios/ports/palletDetailByIdNoPalletRepository';

export class PalletDetailByIdNoPalletRepositoryImpl implements PalletDetailByIdNoPalletRepository {
  async getDetailsByIdNoPallet(idNoPallet: number): Promise<PalletDetailByIdNoPallet[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool
        .request()
        .input('IdNoPallet', sql.Int, idNoPallet)
        .execute('APP_Busqueda_Pallet_IdNoPalletId');

      return result.recordset;
    } catch (error) {
      console.error('Error executing APP_Busqueda_Pallet_IdNoPalletId:', error);
      throw new Error('Failed to fetch pallet details');
    }
  }
}