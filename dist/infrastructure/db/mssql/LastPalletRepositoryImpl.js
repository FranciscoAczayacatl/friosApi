import sql from 'mssql';
import { config } from '../share/dbConfig';
export class LastPalletRepositoryImpl {
    async getLastPalletByMonthAndYear(month, year) {
        try {
            const pool = await sql.connect(config);
            const result = await pool
                .request()
                .input('Mes', sql.Int, month)
                .input('Ejercicio', sql.Int, year)
                .execute('APP_Numero_Folio_Select');
            return result.recordset[0] ?? null; // Debería retornar el primer pallet, o null si no se encuentra
        }
        catch (error) {
            console.error('Error executing APP_Numero_Folio_Select:', error);
            throw new Error('Failed to fetch last pallet by month and year');
        }
    }
}
