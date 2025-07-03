import sql from "mssql";
import { config } from "../../share/dbConfig";
import { CalidadHuertasClientesDeleteRepository } from "../../../../domain/calidad/ports/calidadHuertasClientesDeleteRepository";

export class CalidadHuertasClientesDeleteRepositoryImpl implements CalidadHuertasClientesDeleteRepository {
  async deleteById(id: number): Promise<void> {
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input("IdHuertaCliente", sql.Int, id)
        .query(`
          DELETE FROM TTS_App.dbo.APP_Calidad_HuertasClientes
          WHERE IdHuertaCliente = @IdHuertaCliente
        `);
    } catch (error) {
      console.error("Error deleting APP_Calidad_HuertasClientes:", error);
      throw new Error("Failed to delete APP_Calidad_HuertasClientes");
    }
  }
}