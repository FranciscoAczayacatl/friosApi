import { ImageEvidenceModel } from '../models/imageEvidenceModel';

export interface ImageEvidenceRepository {
  getImagesByCalibreId(id: number): Promise<ImageEvidenceModel[]>;
}