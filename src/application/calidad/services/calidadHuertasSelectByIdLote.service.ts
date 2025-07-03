import { CalidadHuertasSelectByIdLote } from "../../../domain/calidad/models/CalidadHuertasSelectByIdLote";
import { CalidadHuertasSelectByIdLoteRepository } from "../../../domain/calidad/ports/CalidadHuertasSelectByIdLoteRepository";


export class CalidadHuertasSelectByIdLoteService {
  constructor(private repository: CalidadHuertasSelectByIdLoteRepository) {}

  async execute(idLote: number): Promise<CalidadHuertasSelectByIdLote[]> {
    return await this.repository.selectByIdLote(idLote);
  }
}