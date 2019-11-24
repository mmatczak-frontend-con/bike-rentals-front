import { Component, OnInit } from '@angular/core';
import { RentalStats, DailyStat } from '../rental-chart/rental-stats.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stats-naive',
  templateUrl: './stats-naive.component.html',
  styleUrls: ['./stats-naive.component.css']
})
export class StatsNaiveComponent implements OnInit {
  statsData: RentalStats[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient
      .get<{ bikeId: string; rentStartDate: string }[]>('/api/stats/v1')
      .subscribe(stats => {
        const uniqueBikeIds = new Set(stats.map(s => s.bikeId));

        uniqueBikeIds.forEach(bikeId => {
          const grouped = stats
            .filter(s => s.bikeId === bikeId)
            .reduce((acc, bike) => {
              const date = bike.rentStartDate.substr(0, 10);
              if (!acc[date]) {
                acc[date] = 0;
              }
              acc[date]++;
              return acc;
            }, {});

          const dailyStats: DailyStat[] = Object.keys(grouped).map(date => {
            return { date, count: grouped[date] };
          });
          this.statsData.push({ bikeId, dailyStats });
        });
      });
  }
}
