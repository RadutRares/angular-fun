import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Planet } from './planet/planet';
import { PLANETS } from './mockdata/mock-planets';

@Injectable()
export class PlanetService {
	private planetsUrl = 'api/planets';
	private headers = new Headers({'Content-Type': 'application/json'});

	constructor(private http: Http) { }

	getPlanets(): Promise<Planet[]> {
		return this.http.get(this.planetsUrl)
						.toPromise()
						.then(response => response.json().data as Planet[])
						.catch(this.handleError);
	}

	update(planet: Planet): Promise<Planet>{
		const url = `${this.planetsUrl}/${planet.id}`;
		return this.http
			.put(url, JSON.stringify(planet), {headers: this.headers})
			.toPromise()
			.then(() => planet)
			.catch(this.handleError);
	} 

	private handleError(error: any): Promise<any>{
		console.error('Error Occured', error);
		return Promise.reject(error.message || error);
	}

	getPlanet(id: number): Promise<Planet> {
		const url = `${this.planetsUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json().data as Planet)
			.catch(this.handleError);
	}
}
