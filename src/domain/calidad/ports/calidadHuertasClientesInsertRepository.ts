import { CalidadHuertasClientesInsertDTO } from "../models/calidadHuertasClientesInsert.model";

export interface CalidadHuertasClientesInsertRepository {
  insert(data: CalidadHuertasClientesInsertDTO): Promise<void>;
}