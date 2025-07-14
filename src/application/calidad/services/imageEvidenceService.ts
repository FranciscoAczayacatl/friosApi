import { ImageEvidenceModel } from "../../../domain/calidad/models/imageEvidenceModel";
import { ImageEvidenceRepository } from "../../../domain/calidad/ports/imageEvidenceRepository";


export class ImageEvidenceService {
  constructor(private readonly repository: ImageEvidenceRepository) {}

  async getByCalibreId(id: number): Promise<ImageEvidenceModel[]> {
    return this.repository.getImagesByCalibreId(id);
  }
}