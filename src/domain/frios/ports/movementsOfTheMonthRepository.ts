import { movementsOfTheMonth } from '../models/movementsOfTheMonth.model';

export interface movementsOfTheMonthRepository {
  obtenerPalletsPorMesYAnio(mes: number, ejercicio: number): Promise<movementsOfTheMonth[]>;
}