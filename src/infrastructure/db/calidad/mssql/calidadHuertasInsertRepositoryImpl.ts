import sql from "mssql";
import { config } from "../../share/dbConfig";
import { CalidadHuertasInsertRepository } from "../../../../domain/calidad/ports/calidadHuertasInsertRepository";
import { CalidadHuertasInsert } from "../../../../domain/calidad/models/calidadHuertasInsert.model";

export class CalidadHuertasInsertRepositoryImpl implements CalidadHuertasInsertRepository {
  async insert(data: CalidadHuertasInsert): Promise<void> {
    try {
      const pool = await sql.connect(config);
      await pool.request()
        .input("IdLote", sql.Int, data.IdLote)
        .input("Fecha", sql.DateTime, data.Fecha)
        .input("NoRegistro", sql.VarChar(50), data.NoRegistro)
        .input("Huerta", sql.VarChar(50), data.Huerta)
        .input("Municipio", sql.VarChar(50), data.Municipio)
        .input("Cajas", sql.Int, data.Cajas)
        .input("Peso", sql.Decimal(14,2), data.Peso)
        .input("VelocidadCepillado", sql.VarChar(50), data.VelocidadCepillado)
        .input("TipoCorte", sql.VarChar(50), data.TipoCorte)
        .input("EstadoFruta", sql.VarChar(50), data.EstadoFruta)
        .input("Destino", sql.VarChar(50), data.Destino)
        .input("Activo", sql.TinyInt, data.Activo)
        .input("Creador", sql.VarChar(50), data.Creador)
        .input("IdRangoPesos", sql.Int, data.IdRangoPesos)
        .input("Observaciones",sql.VarChar(50), data.Observaciones)
        .execute("APP_Calidad_Huertas_Insert");
    } catch (error) {
      console.error("Error executing APP_Calidad_Huertas_Insert:", error);
      throw new Error("Failed to insert calidad huertas data");
    }
  }
}