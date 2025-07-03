import { CalidadHuertasUpdateRepository } from '../../../domain/calidad/ports/CalidadHuertasUpdateRepository';
import { CalidadHuertasUpdate } from '../../../domain/calidad/models/CalidadHuertasUpdate';

export class CalidadHuertasUpdateService {
  constructor(private repository: CalidadHuertasUpdateRepository) {}

  async execute(data: CalidadHuertasUpdate): Promise<void> {
    await this.repository.update(data);
  }
}