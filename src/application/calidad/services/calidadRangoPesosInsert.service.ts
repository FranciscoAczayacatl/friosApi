import { CalidadRangoPesosInsertRepository } from '../../../domain/calidad/ports/CalidadRangoPesosInsertRepository';
import { CalidadRangoPesosInsert } from '../../../domain/calidad/models/CalidadRangoPesosInsert';

export class CalidadRangoPesosInsertService {
  constructor(private repository: CalidadRangoPesosInsertRepository) {}

  async execute(): Promise<CalidadRangoPesosInsert> {
    return await this.repository.insert();
  }
}