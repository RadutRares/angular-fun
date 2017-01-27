import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let planets = [
	  { id: 11, name: 'New Delphi', description: '' },
	  { id: 12, name: 'Eremar', description: 'The de facto captial of the Greymarche sector' },
	  { id: 13, name: 'Kyoto', description: '' },
	  { id: 14, name: 'Terra', description: '' },
	  { id: 15, name: 'Reitha', description: '' },
	  { id: 16, name: 'Sigma Externus', description: 'The largest outer world, at least in documented residents. A bustling hive of villainy.'},
	  { id: 17, name: 'Laneth', description: 'A prominent research world. Many research stations are scattered on the surface.' },
	  { id: 18, name: 'Dr IQ', description: '' },
	  { id: 19, name: 'Magma', description: '' },
	  { id: 20, name: 'Tornado', description: '' }
    ];
    return {planets};
  }
}