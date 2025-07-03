import { CalidadCalibresSelect } from '../models/CalidadCalibresSelect';

export interface CalidadCalibresSelectRepository {
  getAll(): Promise<CalidadCalibresSelect[]>;
}