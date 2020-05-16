const carMakers = ['richie', 'mimi', 'kirby'];
const carMakers2: string[] = ['richie', 'mimi', 'kirby'];
const dates: Date[] = [new Date(), new Date()];

const array2d: string[][][] = [[['richie']]];
// Help with inference when extracting values

const mycar = carMakers.pop();

carMakers.push('s');

carMakers.map((car: string): string => {
	return car;
});

// Flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('s');

const drink = {
	color: 'brown',
	carbonated: true,
	sugar: 40,
};

//Type alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['clear', false, 0];

const carSpecs: [number, number] = [400, 3354];
const carStats = { hp: 400, wt: 3354 };
