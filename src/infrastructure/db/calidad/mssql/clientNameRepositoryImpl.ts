import sql from 'mssql';
import { config } from '../../share/dbConfig';
import { ClientName } from '../../../../domain/calidad/models/clientName.model';
import { ClientNameRepository } from '../../../../domain/calidad/ports/clientNameRepository';

export class ClientNameRepositoryImpl implements ClientNameRepository {
  async getAllNames(): Promise<ClientName[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().query('SELECT IdCliente ,Nombre FROM [TTS].[dbo].[CLI_Clientes]');
      return result.recordset;
    } catch (error) {
      console.error('Error fetching client names:', error);
      throw new Error('Failed to retrieve client names');
    }
  }
}