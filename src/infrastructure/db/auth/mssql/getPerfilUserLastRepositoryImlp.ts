import { perfilUserLast } from "../../../../domain/auth/models/getPerfilUserLast.model";
import { GetPerfilUserRepository } from "../../../../domain/auth/ports/getPerfilUserLastRepository";
import sql from 'mssql';
import { config } from "../../share/dbConfig";

export class GetPerfilUserLastImpl implements GetPerfilUserRepository{
  async getUser(): Promise<perfilUserLast[]> {
    const pool = await sql.connect(config);
    const result = await pool.request()
    .query(`
      SELECT TOP (1) *
      FROM [TTS_App].[dbo].[APP_SEG_Perfiles]
      ORDER BY IdPerfil DESC
      `)

    return result.recordset
  }
}