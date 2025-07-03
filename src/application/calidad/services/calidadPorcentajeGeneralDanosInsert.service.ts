import { CalidadPorcentajeGeneralDanosInsert } from "../../../domain/calidad/models/CalidadPorcentajeGeneralDanosInsert";
import { CalidadPorcentajeGeneralDanosInsertRepository } from "../../../domain/calidad/ports/CalidadPorcentajeGeneralDanosInsertRepository";


export class CalidadPorcentajeGeneralDanosInsertService {
  constructor(private repository: CalidadPorcentajeGeneralDanosInsertRepository) {}

  async execute(data: CalidadPorcentajeGeneralDanosInsert): Promise<void> {
    await this.repository.insert(data);
  }
}