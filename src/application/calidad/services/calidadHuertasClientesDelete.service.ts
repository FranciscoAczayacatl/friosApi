import { CalidadHuertasClientesDeleteRepository } from "../../../domain/calidad/ports/calidadHuertasClientesDeleteRepository";

export class CalidadHuertasClientesDeleteService {
  constructor(private repository: CalidadHuertasClientesDeleteRepository) {}

  async execute(id: number): Promise<void> {
    await this.repository.deleteById(id);
  }
}