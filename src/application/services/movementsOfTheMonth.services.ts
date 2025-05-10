import { movementsOfTheMonthRepository } from '../../domain/ports/movementsOfTheMonthRepository';
import { movementsOfTheMonth } from '../../domain/models/movementsOfTheMonth.model';

export class ObtenerPalletsService {
  constructor(private repo: movementsOfTheMonthRepository) {}

  async execute(mes: number, ejercicio: number): Promise<movementsOfTheMonth[]> {
    return await this.repo.obtenerPalletsPorMesYAnio(mes, ejercicio);
  }
}