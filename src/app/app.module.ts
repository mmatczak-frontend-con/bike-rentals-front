import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { StatsNaiveComponent } from './stats-naive/stats-naive.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { RentalChartComponent } from './rental-chart/rental-chart.component';
import { StatsImprovedComponent } from './stats-improved/stats-improved.component';

const appRoutes: Routes = [
  { path: 'stats-naive', component: StatsNaiveComponent },
  { path: 'stats-improved', component: StatsImprovedComponent },

  { path: '', redirectTo: '/stats-naive', pathMatch: 'full' },
  { path: '**', redirectTo: '/stats-naive', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    StatsNaiveComponent,
    RentalChartComponent,
    StatsImprovedComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
