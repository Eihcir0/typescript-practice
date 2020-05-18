import { User } from './User';
import { Company } from './Company';

export interface Markerable {
    markerContent(): string;
	location: {
		lat: number;
		lng: number;
    };
    color: string;
}
export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0,
			},
		});
	}

	addMarker(markerable: Markerable): void {
		const marker = new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: markerable.location.lat,
				lng: markerable.location.lng,
			},
		});
		marker.addListener('click', () => {
			const infoWindow = new google.maps.InfoWindow({
				content: markerable.markerContent(),
            });
            infoWindow.open(this.googleMap, marker)
		});
	}

	// addCompanyMarker(company: Company) {
	// 	new google.maps.Marker({
	// 		map: this.googleMap,
	// 		position: {
	// 			lat: company.location.lat,
	// 			lng: company.location.lng,
	// 		},
	// 	});
	// }
}
