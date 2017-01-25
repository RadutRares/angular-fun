import { Injectable } from '@angular/core';

import { Planet } from './planet/planet';
import { PLANETS } from './mockdata/mock-planets';

@Injectable()
export class PlanetService {
	getPlanets(): Promise<Planet[]> {
		return Promise.resolve(PLANETS);
	}

	getPlanet(id: number): Promise<Planet> {
  		return this.getPlanets()
             .then(planets => planets.find(planet => planet.id === id));
	}
}
