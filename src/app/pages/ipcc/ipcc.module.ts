import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
// import { NgxChartsModule } from '@swimlane/ngx-charts';

import { ThemeModule } from '../../@theme/theme.module';
import { ProfitCardComponent } from './profit-card/profit-card.component';
import { StatsCardBackComponent } from './profit-card/back-side/stats-card-back.component';
import { StatsBarAnimationChartComponent } from './profit-card/front-side/stats-bar-animation-chart.component';
import { StatsCardFrontComponent } from './profit-card/front-side/stats-card-front.component';
import { StatsAreaChartComponent } from './profit-card/back-side/stats-area-chart.component';

import { AgentStatsComponent } from './agent-stats/agent-stats.component';
import { IpccCallAnalyticsComponent } from './call-analytics/call-analytics.component';

import { IpccLegendChartComponent } from './legend-chart/legend-chart.component';
import { SlideOutComponent } from './slide-out/slide-out.component';
import {
  ECommerceVisitorsAnalyticsChartComponent,
} from './call-analytics/visitors-analytics-chart/visitors-analytics-chart.component';
import {
  ECommerceVisitorsStatisticsComponent,
} from './call-analytics/visitors-statistics/visitors-statistics.component';
import { ChartModule } from 'angular2-chartjs';
import { IpccComponent } from './ipcc.component';

@NgModule({
  imports: [
    ThemeModule,
    ChartModule,
   NgxEchartsModule,
    // NgxChartsModule,
 //   LeafletModule,
  ],
  declarations: [
    IpccComponent,
    ProfitCardComponent,
    StatsCardFrontComponent,
    StatsCardBackComponent,
    StatsBarAnimationChartComponent,
    StatsAreaChartComponent,
    AgentStatsComponent,
    IpccCallAnalyticsComponent,
    IpccLegendChartComponent,
    SlideOutComponent,
    ECommerceVisitorsAnalyticsChartComponent,
    ECommerceVisitorsStatisticsComponent,
  ],
  providers: [
    // CountryOrdersMapService,
  ],
})
export class IpccModule { }
