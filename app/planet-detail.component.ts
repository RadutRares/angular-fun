// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { Planet } from './planet/planet';
import { PlanetService } from './planet.service';
import 'rxjs/add/operator/switchMap';
 
@Component({
  moduleId: module.id,
  selector: 'planet-detail',
  templateUrl: 'planet-detail.component.html',
  styleUrls: ['planet-detail.component.css'],
})

export class PlanetDetailComponent implements OnInit {
 	@Input()
  	planet: Planet;

  	constructor(
	  private planetService: PlanetService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	ngOnInit(): void {
	  this.route.params
	    .switchMap((params: Params) => this.planetService.getPlanet(+params['id']))
	    .subscribe(planet => this.planet = planet);
	}

	goBack(): void {
	  this.location.back();
	}
}