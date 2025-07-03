import { CalidadCategoriaSelect } from "../../../domain/calidad/models/CalidadCategoriaSelect";
import { CalidadCategoriaSelectRepository } from "../../../domain/calidad/ports/CalidadCategoriaSelectRepository";


export class CalidadCategoriaSelectService {
  constructor(private repository: CalidadCategoriaSelectRepository) {}

  async execute(): Promise<CalidadCategoriaSelect[]> {
    return await this.repository.getAll();
  }
}