import faker from 'faker';
import { Markerable } from './CustomMap'

export class User implements Markerable {
    name: string;
    color: string;
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
        this.name = faker.name.firstName();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }

    markerContent(): string {
        return `User: ${this.name}`
    }
}
