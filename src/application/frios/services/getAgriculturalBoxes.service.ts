import { AgriculturalBoxRepository } from '../../../domain/frios/ports/agriculturalBoxRepository';
import { AgriculturalBox } from '../../../domain/frios/models/AgriculturalBox';

export class GetAgriculturalBoxesService {
  constructor(private repository: AgriculturalBoxRepository) {}

  async execute(): Promise<AgriculturalBox[]> {
    return await this.repository.getAll();
  }
}