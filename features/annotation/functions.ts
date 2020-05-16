const add = (a: number, b: number): number => {
	return a + b;
};

const subtract = (a: number, b: number): number => a - b;

function divide(a: number, b: number): number {
	return a / b;
}

const multiply = function (a: number, b: number) {
	return a * b;
};

const logger = (message: string): void => {
	console.log(message);
};

const throwError = (message: string): never => {
	throw new Error(message);
};
const throwError2 = (message: string): void => {
	if (!message) {
		throw new Error(message);
	}
};

const todaysWeather = {
	date: new Date(),
	weather: 'sunny',
};

const logWeather = (forecast: { date: Date; weather: string }): void => {
	console.log(forecast.date);
	console.log(forecast.weather);
};

logWeather(todaysWeather);

const logWeather2 = ({ date, weather }: { date: Date; weather: string }) => {
	console.log(date, weather);
};
