import { CalidadHuertasPesoCalibreDeleteRepository } from "../../../domain/calidad/ports/CalidadHuertasPesoCalibreDeleteRepository";


export class CalidadHuertasPesoCalibreDeleteService {
  constructor(private repository: CalidadHuertasPesoCalibreDeleteRepository) {}

  async execute(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}