class Vehicle {
	// color: string;

	// constructor(color: string) {
	//	this.color = color;
	// }

	constructor(public color: string) {}

	public drive(): void {
		console.log('chugchug');
	}
	protected honk(): void {
		console.log('beep');
	}
}

const vehicle = new Vehicle('red');

vehicle.drive();

class Carly extends Vehicle {
	constructor(public wheels: number, color: string) {
		super(color);
	}
	public drive(): void {
		console.log('vroom');
	}

	startDrivingProcess(): void {
		this.drive();
		this.honk();
	}
}

const carly = new Carly(4, 'blue');
carly.startDrivingProcess();
console.log(carly.color);
console.log(carly.wheels);
