import { CalidadCalibresSelect } from "../../../domain/calidad/models/CalidadCalibresSelect";
import { CalidadCalibresSelectRepository } from "../../../domain/calidad/ports/CalidadCalibresSelectRepository";


export class CalidadCalibresSelectService {
  constructor(private repository: CalidadCalibresSelectRepository) {}

  async execute(): Promise<CalidadCalibresSelect[]> {
    return await this.repository.getAll();
  }
}