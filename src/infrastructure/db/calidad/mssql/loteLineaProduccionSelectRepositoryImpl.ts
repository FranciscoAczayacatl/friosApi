import { config } from '../../share/dbConfig';
import { LoteLineaProduccionSelect } from '../../../domain/models/LoteLineaProduccionSelect';
import { LoteLineaProduccionSelectRepository } from '../../../domain/ports/loteLineaProduccionSelectRepository';

export class LoteLineaProduccionSelectRepositoryImpl implements LoteLineaProduccionSelectRepository {
  async getByLoteId(idLote: number): Promise<LoteLineaProduccionSelect | null> {
    const result = await config.query`
      SELECT LO.IdLote, LO.IdLineaProduccion, LP.LineaProduccion
      FROM [TTS].[dbo].[MOV_Lotes] LO
      INNER JOIN [TTS].[dbo].[DIV_LineasProduccion] LP 
      ON LO.IdLineaProduccion = LP.IdLineaProduccion
      WHERE LO.IdLote = ${idLote};
    `;

    return result.recordset[0] || null;
  }
}