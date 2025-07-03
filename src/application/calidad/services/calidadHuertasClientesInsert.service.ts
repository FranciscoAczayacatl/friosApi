import { CalidadHuertasClientesInsertDTO } from "../../../domain/calidad/models/calidadHuertasClientesInsert.model";
import { CalidadHuertasClientesInsertRepository } from "../../../domain/calidad/ports/calidadHuertasClientesInsertRepository";

export class CalidadHuertasClientesInsertService {
  constructor(private repository: CalidadHuertasClientesInsertRepository) {}

  async execute(data: CalidadHuertasClientesInsertDTO): Promise<void> {
    await this.repository.insert(data);
  }
}
