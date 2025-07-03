import { CalidadHuertasInsert } from "../../../domain/calidad/models/calidadHuertasInsert.model";
import { CalidadHuertasInsertRepository } from "../../../domain/calidad/ports/calidadHuertasInsertRepository";


export class CalidadHuertasInsertService {
  constructor(private repository: CalidadHuertasInsertRepository) {}

  async execute(data: CalidadHuertasInsert): Promise<void> {
    await this.repository.insert(data);
  }
}