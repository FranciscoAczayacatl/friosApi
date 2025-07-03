import { CalidadHuertasInsert } from "../models/calidadHuertasInsert.model";

export interface CalidadHuertasInsertRepository {
  insert(data: CalidadHuertasInsert): Promise<void>;
}