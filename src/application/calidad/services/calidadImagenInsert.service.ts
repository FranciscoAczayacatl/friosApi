import { CalidadImagenInsert } from "../../../domain/calidad/models/CalidadImagenInsert";
import { CalidadImagenInsertRepository } from "../../../domain/calidad/ports/CalidadImagenInsertRepository";


export class CalidadImagenInsertService {
  constructor(private repository: CalidadImagenInsertRepository) {}

  async execute(data: CalidadImagenInsert): Promise<CalidadImagenInsert> {
    return await this.repository.insert(data);
  }
}