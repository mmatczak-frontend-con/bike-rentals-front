import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RentalStats } from '../rental-chart/rental-stats.model';

@Component({
  selector: 'app-stats-improved',
  templateUrl: './stats-improved.component.html',
  styleUrls: ['./stats-improved.component.css']
})
export class StatsImprovedComponent implements OnInit {
  statsData: Observable<RentalStats[]>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.statsData = this.httpClient.get<RentalStats[]>('/api/stats/v3');
  }
}
