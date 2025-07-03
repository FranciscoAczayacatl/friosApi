import { CalidadRangoPesosSelectToday } from '../models/CalidadRangoPesosSelectToday';

export interface CalidadRangoPesosSelectTodayRepository {
  selectToday(): Promise<CalidadRangoPesosSelectToday[]>;
}