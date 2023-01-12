import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';

import { NotFoundComponent } from '../not-found/not-found.component';
import { AboutComponent } from '../about/about.component';
import { CategoriesComponent } from '../categories/categories.component';

const rootConfig: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'business', component: CategoriesComponent },
  { path: 'entertainment', component: CategoriesComponent },
  { path: 'general', component: CategoriesComponent },
  { path: 'health', component: CategoriesComponent },
  { path: 'science', component: CategoriesComponent },
  { path: 'sports', component: CategoriesComponent },
  { path: 'technology', component: CategoriesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(rootConfig)],
})
export class AppRoutingModule {}
