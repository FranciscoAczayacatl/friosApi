import { PodEmbarqueInsert } from "../models/podEmbarqueInsert.model";

export interface PodEmbarqueInsertRepository {
  insertOrUpdate(data: PodEmbarqueInsert): Promise<{ resultado: boolean }>;
}