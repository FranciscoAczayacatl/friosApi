import sql from "mssql";
import { config } from "../share/dbConfig";
import { PodEmbarqueInsertRepository } from "../../../domain/ports/podEmbarqueInsertRepository";
import { PodEmbarqueInsert } from "../../../domain/models/podEmbarqueInsert.model";

export class PodEmbarqueInsertRepositoryImpl implements PodEmbarqueInsertRepository {
  async insertOrUpdate(data: PodEmbarqueInsert): Promise<{ resultado: boolean }> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request()
        .input("Id_Embarque", sql.Int, data.Id_Embarque)
        .input("Id_Realizo_embarque", sql.Int, data.Id_Realizo_embarque)
        .input("Id_Autorizo_embarque", sql.Int, data.Id_Autorizo_embarque)
        .input("Fecha", sql.DateTime, new Date(data.Fecha))
        .input("Hora_Inicio", sql.DateTime, new Date(data.Hora_Inicio))
        .input("Hora_Fin", sql.DateTime, new Date(data.Hora_Fin))
        .input("Hora_Despacho", sql.DateTime, new Date(data.Hora_Despacho))
        .input("Caja_Limpia", sql.VarChar(50), data.Caja_Limpia)
        .input("Caja_Sanitizada", sql.VarChar(50), data.Caja_Sanitizada)
        .input("Equipo_Funcionamiento", sql.VarChar(50), data.Equipo_Funcionamiento)
        .input("Usuario", sql.VarChar(10), data.Usuario)
        .execute("POD_Embarque_Insert");

      const resultado = result.recordset[0]?.resultado === 1;
      return { resultado };
    } catch (error) {
      console.error("Error ejecutando POD_Embarque_Insert:", error);
      throw new Error("Error en insert/update de embarque");
    }
  }
}