import { AgriculturalBox } from '../models/AgriculturalBox';

export interface AgriculturalBoxRepository {
  getAll(): Promise<AgriculturalBox[]>;
}