import sql from 'mssql';
import { UpdatePalletRepository } from '../../../domain/ports/updatePalletRepository';
import { UpdatePalletDTO } from '../../../domain/models/updatePallet.dto';
import { config } from '../../db/share/dbConfig';

export class UpdatePalletRepositoryImpl implements UpdatePalletRepository {
  async updatePallet(data: UpdatePalletDTO): Promise<void> {
    const pool = await sql.connect(config);
    await pool.request()
      .input('Pallets', sql.Decimal(10, 2), data.Pallets)
      .input('Cajas', sql.Decimal(10, 2), data.Cajas)
      .input('Kilogramos', sql.Decimal(10, 2), data.Kilogramos)
      .input('IdPallet', sql.Int, data.IdPallet)
      .execute('APP_MOV_Pallets_Update');
  }
}