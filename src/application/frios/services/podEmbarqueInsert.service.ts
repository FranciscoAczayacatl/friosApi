import { PodEmbarqueInsertRepository } from "../../../domain/frios/ports/podEmbarqueInsertRepository";
import { PodEmbarqueInsert } from "../../../domain/frios/models/podEmbarqueInsert.model";

export class PodEmbarqueInsertService {
  constructor(private repository: PodEmbarqueInsertRepository) {}

  async execute(data: PodEmbarqueInsert): Promise<{ resultado: boolean }> {
    return await this.repository.insertOrUpdate(data);
  }
}