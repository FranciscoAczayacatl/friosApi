import { CalidadImagenesEvidenciaDeleteRepository } from '../../../domain/calidad/ports/CalidadImagenesEvidenciaDeleteRepository';

export class CalidadImagenesEvidenciaDeleteService {
  constructor(private repository: CalidadImagenesEvidenciaDeleteRepository) {}

  async execute(id: number): Promise<void> {
    await this.repository.deleteById(id);
  }
}