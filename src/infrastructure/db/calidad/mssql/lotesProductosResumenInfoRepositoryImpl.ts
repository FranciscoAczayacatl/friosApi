import { LotesProductosResumenInfoRepository } from '../../../../domain/calidad/ports/LotesProductosResumenInfoRepository';
import { LotesProductosResumenInfo } from '../../../../domain/calidad/models/LotesProductosResumenInfo';
import sql from 'mssql';
import { config } from '../../share/dbConfig';

export class LotesProductosResumenInfoRepositoryImpl implements LotesProductosResumenInfoRepository {
  async getByLoteId(idLote: number): Promise<LotesProductosResumenInfo[]> {
    const pool = await sql.connect(config);
    const result = await pool.request()
      .input('IdLote', sql.Int, idLote)
      .query(`
        SELECT  
            L.IdProductosDetalle,
            L.IdLote,
            L.IdProducto,
            P.Calibre,
            M.Marca, 
            C.Categoria,
            G.Grupo
        FROM [TTS].[dbo].[MOV_LotesProductosResumen] L
        INNER JOIN [TTS].[dbo].PRO_Productos P ON L.IdProducto = P.IdProducto
        INNER JOIN [TTS].[dbo].PRO_Marcas M ON P.IdMarca = M.IdMarca
        INNER JOIN [TTS].[dbo].PRO_Categorias C ON P.IdCategoria = C.IdCategoria
        INNER JOIN [TTS].[dbo].WPA_Grupos G ON C.IdGrupo = G.IdGrupo
        WHERE L.IdLote = @IdLote;
      `);
    return result.recordset;
  }
}