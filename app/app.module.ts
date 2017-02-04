import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule }   from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';

import { PlanetDetailComponent } from './planet-detail.component';
import { PlanetComponent } from './planet.component';
import { PlanetService } from './planet.service';
import { PlanetSearchComponent } from './planet-search.component';

import { DashboardComponent } from './dashboard/dashboard.component'

@NgModule({
  imports: [ 
  	BrowserModule,
  	FormsModule,
    HttpModule,
  	AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ 
  	AppComponent,
  	PlanetDetailComponent,
  	PlanetComponent,
  	DashboardComponent,
    PlanetSearchComponent,
  ],
  providers: [
  	PlanetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


