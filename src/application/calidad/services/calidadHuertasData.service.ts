import { CalidadHuertasData } from "../../../domain/calidad/models/calidadHuertasData.model";
import { CalidadHuertasDataRepository } from "../../../domain/calidad/ports/calidadHuertasDataRepository";

export class CalidadHuertasDataService {
  constructor(private repository: CalidadHuertasDataRepository) {}

  async execute(): Promise<CalidadHuertasData[]> {
    return await this.repository.getAll();
  }
}