import { CalidadHuertasClientesSelectByIdLoteRepository } from "../../../domain/calidad/ports/calidadHuertasClientesSelectByIdLoteRepository";
import { CalidadHuertasClientes } from "../../../domain/calidad/models/calidadHuertasClientes.model";

export class CalidadHuertasClientesSelectByIdLoteService {
  constructor(private repository: CalidadHuertasClientesSelectByIdLoteRepository) {}

  async execute(idLote: number): Promise<CalidadHuertasClientes[]> {
    return await this.repository.selectByIdLote(idLote);
  }
}