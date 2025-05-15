import { PodEmbarqueInsertRepository } from "../../domain/ports/podEmbarqueInsertRepository";
import { PodEmbarqueInsert } from "../../domain/models/podEmbarqueInsert.model";

export class PodEmbarqueInsertService {
  constructor(private repository: PodEmbarqueInsertRepository) {}

  async execute(data: PodEmbarqueInsert): Promise<{ resultado: boolean }> {
    return await this.repository.insertOrUpdate(data);
  }
}