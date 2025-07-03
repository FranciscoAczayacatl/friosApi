import { CalidadHuertasPesoCalibreCheckRepository } from "../../../domain/calidad/ports/CalidadHuertasPesoCalibreCheckRepository";


export class CalidadHuertasPesoCalibreCheckService {
  constructor(private repository: CalidadHuertasPesoCalibreCheckRepository) {}

  async execute(idLote: number, calibrePattern: string, marca: string): Promise<boolean> {
    return await this.repository.existsByLoteAndCalibre(idLote, calibrePattern, marca);
  }
}