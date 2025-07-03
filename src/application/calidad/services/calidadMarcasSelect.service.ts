import { CalidadMarcasSelect } from "../../../domain/calidad/models/CalidadMarcasSelect";
import { CalidadMarcasSelectRepository } from "../../../domain/calidad/ports/CalidadMarcasSelectRepository";


export class CalidadMarcasSelectService {
  constructor(private repository: CalidadMarcasSelectRepository) {}

  async execute(): Promise<CalidadMarcasSelect[]> {
    return await this.repository.getAll();
  }
}