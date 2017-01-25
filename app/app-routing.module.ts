import { NgModule }      from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';

import { PlanetDetailComponent } from './planet-detail.component';
import { PlanetComponent } from './planet.component';
import { DashboardComponent } from './dashboard/dashboard.component'


const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full'},
	{ path: 'planets', component: PlanetComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: PlanetDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

