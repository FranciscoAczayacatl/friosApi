import { CalidadPorcentajeGeneralDanos } from "../../../domain/calidad/models/CalidadPorcentajeGeneralDanos";
import { CalidadPorcentajeGeneralDanosByIdRepository } from "../../../domain/calidad/ports/CalidadPorcentajeGeneralDanosByIdRepository";


export class CalidadPorcentajeGeneralDanosByIdService {
  constructor(private repository: CalidadPorcentajeGeneralDanosByIdRepository) {}

  async execute(id: number): Promise<CalidadPorcentajeGeneralDanos | null> {
    return await this.repository.getById(id);
  }
}