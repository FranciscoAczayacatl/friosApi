import { AgriculturalBoxRepository } from '../../domain/ports/agriculturalBoxRepository';
import { AgriculturalBox } from '../../domain/models/AgriculturalBox';

export class GetAgriculturalBoxesService {
  constructor(private repository: AgriculturalBoxRepository) {}

  async execute(): Promise<AgriculturalBox[]> {
    return await this.repository.getAll();
  }
}