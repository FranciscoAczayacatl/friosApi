import { CalidadHuertasClientes } from "../models/calidadHuertasClientes.model";

export interface CalidadHuertasClientesSelectByIdLoteRepository {
  selectByIdLote(idLote: number): Promise<CalidadHuertasClientes[]>;
}