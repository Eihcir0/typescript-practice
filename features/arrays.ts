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
