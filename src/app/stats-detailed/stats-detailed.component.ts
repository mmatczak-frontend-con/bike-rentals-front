import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-stats-detailed',
  templateUrl: './stats-detailed.component.html',
  styleUrls: ['./stats-detailed.component.css']
})
export class StatsDetailedComponent implements OnInit {
  stats: Observable<string>;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.stats = this.httpClient
      .get<{ stats: string }>('/api/stats/detailed')
      .pipe(map(response => response.stats));
  }
}
