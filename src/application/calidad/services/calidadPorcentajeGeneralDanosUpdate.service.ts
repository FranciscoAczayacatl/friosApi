import { CalidadPorcentajeGeneralDanosUpdate } from "../../../domain/calidad/models/CalidadPorcentajeGeneralDanosUpdate";
import { CalidadPorcentajeGeneralDanosUpdateRepository } from "../../../domain/calidad/ports/CalidadPorcentajeGeneralDanosUpdateRepository";


export class CalidadPorcentajeGeneralDanosUpdateService {
  constructor(private repository: CalidadPorcentajeGeneralDanosUpdateRepository) {}

  async execute(data: CalidadPorcentajeGeneralDanosUpdate): Promise<void> {
    await this.repository.update(data);
  }
}