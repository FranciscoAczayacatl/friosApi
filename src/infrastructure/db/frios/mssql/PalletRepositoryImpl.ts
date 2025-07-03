import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { movementsOfTheMonth } from '../../../../domain/frios/models/movementsOfTheMonth.model';
import { movementsOfTheMonthRepository } from '../../../../domain/frios/ports/movementsOfTheMonthRepository';

export class PalletRepositoryImpl implements movementsOfTheMonthRepository {
  async obtenerPalletsPorMesYAnio(mes: number, ejercicio: number): Promise<movementsOfTheMonth[]> {
    const pool = await sql.connect(config);
    const result = await pool
      .request()
      .input('Mes', sql.Int, mes)
      .input('Ejercicio', sql.Int, ejercicio)
      .execute('APP_Movimientos_Mes_Select');

    return result.recordset as movementsOfTheMonth[];
  }
}