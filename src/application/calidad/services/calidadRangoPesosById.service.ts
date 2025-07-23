import { CalidadRangoPesosById } from '../../../domain/calidad/models/CalidadRangoPesosById';
import { CalidadRangoPesosByIdRepository } from '../../../domain/calidad/ports/CalidadRangoPesosByIdRepository';

export class CalidadRangoPesosByIdService {
  constructor(private repository: CalidadRangoPesosByIdRepository) {}

  async execute(id: number): Promise<CalidadRangoPesosById | null> {
    return await this.repository.getById(id);
  }
}