import { QualityHuertaRecentRepository } from "../../../domain/calidad/ports/qualityHuertaRecentRepository";
import { QualityHuertaRecent } from "../../../domain/calidad/models/qualityHuertaRecent.model";

export class QualityHuertaRecentService {
  constructor(private repository: QualityHuertaRecentRepository) {}

  async execute(): Promise<QualityHuertaRecent[]> {
    return await this.repository.getRecentQualityEntries();
  }
}