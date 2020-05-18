import faker from 'faker';
import { Markerable } from './CustomMap';

export class Company implements Markerable {
	companyName: string;
	color: string = 'red';
	catchPhrase: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.companyName = faker.company.companyName();
		this.catchPhrase = faker.company.catchPhrase();
		this.location = {
			lat: parseFloat(faker.address.latitude()),
			lng: parseFloat(faker.address.longitude()),
		};
	}
	markerContent(): string {
		return `<div></div><h1>${this.companyName}</h1> <h2>says ${this.catchPhrase}</h2></div>`;
	}
}
