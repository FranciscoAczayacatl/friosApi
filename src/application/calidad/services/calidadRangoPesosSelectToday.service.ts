import { CalidadRangoPesosSelectTodayRepository } from '../../../domain/calidad/ports/CalidadRangoPesosSelectTodayRepository';
import { CalidadRangoPesosSelectToday } from '../../../domain/calidad/models/CalidadRangoPesosSelectToday';

export class CalidadRangoPesosSelectTodayService {
  constructor(private repository: CalidadRangoPesosSelectTodayRepository) {}

  async execute(): Promise<CalidadRangoPesosSelectToday[]> {
    return await this.repository.selectToday();
  }
}