import sql from "mssql";
import { config } from "../../share/dbConfig";
import { CalidadHuertasClientesInsertRepository } from "../../../../domain/calidad/ports/calidadHuertasClientesInsertRepository";
import { CalidadHuertasClientesInsertDTO } from "../../../../domain/calidad/models/calidadHuertasClientesInsert.model";

export class CalidadHuertasClientesInsertRepositoryImpl implements CalidadHuertasClientesInsertRepository {
  async insert(data: CalidadHuertasClientesInsertDTO): Promise<void> {
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input("Cliente", sql.VarChar, data.Cliente)
        .input("IdLote", sql.Int, data.IdLote)
        .query(`
          INSERT INTO TTS_App.dbo.APP_Calidad_HuertasClientes (Cliente, IdLote)
          VALUES (@Cliente, @IdLote)
        `);
    } catch (error) {
      console.error("Error inserting APP_Calidad_HuertasClientes:", error);
      throw new Error("Failed to insert APP_Calidad_HuertasClientes");
    }
  }
}