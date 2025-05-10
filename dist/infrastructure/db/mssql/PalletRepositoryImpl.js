import sql from 'mssql';
import { config } from '../share/dbConfig';
export class PalletRepositoryImpl {
    async obtenerPalletsPorMesYAnio(mes, ejercicio) {
        const pool = await sql.connect(config);
        const result = await pool
            .request()
            .input('Mes', sql.Int, mes)
            .input('Ejercicio', sql.Int, ejercicio)
            .execute('APP_Movimientos_Mes_Select');
        return result.recordset;
    }
}
