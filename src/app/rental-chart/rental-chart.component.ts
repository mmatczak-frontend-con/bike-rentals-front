import { Component, OnInit, Input } from '@angular/core';
import { DailyStat } from './rental-stats.model';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-rental-chart',
  templateUrl: './rental-chart.component.html',
  styleUrls: ['./rental-chart.component.css']
})
export class RentalChartComponent implements OnInit {
  @Input()
  bikeId: string;

  @Input()
  dailyStats: DailyStat[];

  public barChartOptions: ChartOptions = {
    responsive: true
  };
  public barChartType: ChartType = 'bar';

  public barChartLabels: Label[] = [];
  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [];

  constructor() {}

  ngOnInit() {
    this.barChartLabels = this.dailyStats.map(stat => stat.date);
    this.barChartData = [
      {
        data: this.dailyStats.map(stat => stat.count),
        label: 'Liczba wypożyczeń'
      }
    ];
  }
}
