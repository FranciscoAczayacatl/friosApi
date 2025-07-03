import { CalidadPorcentajeGeneralDanosSelect } from "../../../domain/calidad/models/CalidadPorcentajeGeneralDanosSelect";
import { CalidadPorcentajeGeneralDanosSelectRepository } from "../../../domain/calidad/ports/CalidadPorcentajeGeneralDanosSelectRepository";

export class CalidadPorcentajeGeneralDanosSelectService {
  constructor(private repository: CalidadPorcentajeGeneralDanosSelectRepository) {}

  async execute(): Promise<CalidadPorcentajeGeneralDanosSelect[]> {
    return await this.repository.select();
  }
}