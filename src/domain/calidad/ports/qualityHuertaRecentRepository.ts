import { QualityHuertaRecent } from "../models/qualityHuertaRecent.model";

export interface QualityHuertaRecentRepository {
  getRecentQualityEntries(): Promise<QualityHuertaRecent[]>;
}