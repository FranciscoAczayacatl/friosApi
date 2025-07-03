

import { CalidadRangoPesosUpdateRepository } from '../../../domain/calidad/ports/CalidadRangoPesosUpdateRepository';
import { CalidadRangoPesosUpdate } from '../../../domain/calidad/models/CalidadRangoPesosUpdate';

export class CalidadRangoPesosUpdateService {
  constructor(private repository: CalidadRangoPesosUpdateRepository) {}

  async execute(data: CalidadRangoPesosUpdate): Promise<void> {
    await this.repository.update(data);
  }
}