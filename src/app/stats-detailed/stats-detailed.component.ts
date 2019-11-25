import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stats-detailed',
  templateUrl: './stats-detailed.component.html',
  styleUrls: ['./stats-detailed.component.css']
})
export class StatsDetailedComponent implements OnInit {
  stats: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.stats = this.route.data.pipe(map(data => data.stats));
  }
}
