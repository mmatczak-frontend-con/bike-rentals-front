export interface RentalStats {
  bikeId: string;
  dailyStats: DailyStat[];
}

export interface DailyStat {
  date: string;
  count: number;
}
