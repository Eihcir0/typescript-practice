const apple: number = 5;
const nothingMuch = mn;
const nothing: undefined;

class Car {}

let car: Car = new Car();

//Object literal

let point: { x: number; y: number } = {
	x: 9,
	A: 20,
};

console.log(point);
//Function

const logNumber: (i: number) => string = (i: number): string => {
	return 's' + i;
};

// When to use annotations
// 1)  Function returns 'any'

const json = '{"x" 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let index = 0; index < words.length; index++) {
	const element = words[index];
	if (element === 'green') {
		foundWord = true;
	}
}

let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let index = 0; index < numbers.length; index++) {
	const element = numbers[index];
	if (element > 0) {
		numberAboveZero = element;
	}
}
