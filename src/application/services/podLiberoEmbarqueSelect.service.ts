import { PodLiberoEmbarqueSelectRepository } from "../../domain/ports/podLiberoEmbarqueSelect.repository";
import { PodEmpleado } from "../../domain/models/podEmpleado.model";

export class PodLiberoEmbarqueSelectService {
  constructor(private repository: PodLiberoEmbarqueSelectRepository) {}

  async execute(): Promise<PodEmpleado[]> {
    return await this.repository.selectAll();
  }
}