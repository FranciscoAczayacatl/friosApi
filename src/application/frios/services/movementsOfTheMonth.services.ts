import { movementsOfTheMonthRepository } from '../../../domain/frios/ports/movementsOfTheMonthRepository';
import { movementsOfTheMonth } from '../../../domain/frios/models/movementsOfTheMonth.model';

export class ObtenerPalletsService {
  constructor(private repo: movementsOfTheMonthRepository) {}

  async execute(mes: number, ejercicio: number): Promise<movementsOfTheMonth[]> {
    return await this.repo.obtenerPalletsPorMesYAnio(mes, ejercicio);
  }
}