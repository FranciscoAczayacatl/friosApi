import sql from "mssql";
import { config } from "../../share/dbConfig";
import { CalidadHuertasClientes } from "../../../../domain/calidad/models/calidadHuertasClientes.model";
import { CalidadHuertasClientesSelectByIdLoteRepository } from "../../../../domain/calidad/ports/calidadHuertasClientesSelectByIdLoteRepository";

export class CalidadHuertasClientesSelectByIdLoteRepositoryImpl implements CalidadHuertasClientesSelectByIdLoteRepository {
  async selectByIdLote(idLote: number): Promise<CalidadHuertasClientes[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input("IdLote", sql.Int, idLote)
        .query("SELECT * FROM [TTS_App].[dbo].[APP_Calidad_HuertasClientes] WHERE IdLote = @IdLote");

      return result.recordset;
    } catch (error) {
      console.error("Error selecting APP_Calidad_HuertasClientes by IdLote:", error);
      throw new Error("Failed to retrieve APP_Calidad_HuertasClientes");
    }
  }
}