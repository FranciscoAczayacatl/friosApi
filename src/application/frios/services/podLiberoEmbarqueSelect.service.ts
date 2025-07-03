import { PodLiberoEmbarqueSelectRepository } from "../../../domain/frios/ports/podLiberoEmbarqueSelect.repository";
import { PodEmpleado } from "../../../domain/frios/models/podEmpleado.model";

export class PodLiberoEmbarqueSelectService {
  constructor(private repository: PodLiberoEmbarqueSelectRepository) {}

  async execute(): Promise<PodEmpleado[]> {
    return await this.repository.selectAll();
  }
}