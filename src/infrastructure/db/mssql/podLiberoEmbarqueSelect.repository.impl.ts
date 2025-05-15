import { PodLiberoEmbarqueSelectRepository } from "../../../domain/ports/podLiberoEmbarqueSelect.repository";
import { PodEmpleado } from "../../../domain/models/podEmpleado.model";
import sql from "mssql";
import { config } from "../share/dbConfig";

export class PodLiberoEmbarqueSelectRepositoryImpl implements PodLiberoEmbarqueSelectRepository {
  async selectAll(): Promise<PodEmpleado[]> {
    try {
      const pool = await sql.connect(config);
      const result = await pool.request().execute("POD_LiberoEmbarque_Select");
      return result.recordset as PodEmpleado[];
    } catch (error) {
      console.error("Error executing POD_LiberoEmbarque_Select:", error);
      throw new Error("Failed to fetch POD empleados");
    }
  }
}