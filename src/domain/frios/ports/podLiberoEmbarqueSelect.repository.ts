import { PodEmpleado } from "../models/podEmpleado.model";

export interface PodLiberoEmbarqueSelectRepository {
  selectAll(): Promise<PodEmpleado[]>;
}