import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

import { NotFoundComponent } from '../not-found/not-found.component';
import { BusinessComponent } from '../business/business.component';
import { EntertainmentComponent } from '../entertainment/entertainment.component';
import { GeneralComponent } from '../general/general.component';
import { HealthComponent } from '../health/health.component';
import { ScienceComponent } from '../science/science.component';
import { SportsComponent } from '../sports/sports.component';
import { TechnologyComponent } from '../technology/technology.component';
import { AboutComponent } from '../about/about.component';

const rootConfig: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'business', component: BusinessComponent },
  { path: 'entertainment', component: EntertainmentComponent },
  { path: 'general', component: GeneralComponent },
  { path: 'health', component: HealthComponent },
  { path: 'science', component: ScienceComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'technology', component: TechnologyComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(rootConfig)],
})
export class AppRoutingModule {}
