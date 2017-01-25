import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { PlanetDetailComponent } from './planet-detail.component';
import { PlanetComponent } from './planet.component';
import { PlanetService } from './planet.service';

import { DashboardComponent } from './dashboard/dashboard.component'

import { AppRoutingModule }   from './app-routing.module';


@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
  	AppRoutingModule
  ],
  declarations: [ 
  	AppComponent,
  	PlanetDetailComponent,
  	PlanetComponent,
  	DashboardComponent
  ],
  providers: [
  	PlanetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


