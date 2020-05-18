interface Reportable {
	// ie. hasSummary
	summary(): string;
}
const oldCivic = {
	name: 'civic',
	year: 2000,
	broken: true,
	summary(): string {
		return this.name;
	},
};

const drinky = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
	summary(): string {
		return `My drink has ${this.sugar}g of sugar`;
	},
};

const printSummary = (item: Reportable): void => {
	console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drinky);
