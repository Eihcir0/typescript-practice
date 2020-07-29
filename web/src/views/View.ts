import { Model } from '../models/Model';

export abstract class View<T extends Model<K>, K> {
	constructor(public parent: Element, public model: T) {
		this.bindModel();
	}

	abstract template(): string;

	regions: { [key: string]: Element } = {};
	regionsMap(): { [key: string]: string } {
        return {}
    }

	eventsMap(): { [key: string]: (event: Event) => void } {
		return {}
	}

	bindModel(): void {
		this.model.on('change', () => this.render());
	}

	bindEvents(fragment: DocumentFragment): void {
		const eventsMap = this.eventsMap();

		for (let eventKey in eventsMap) {
			const [eventName, selector] = eventKey.split(':');

			fragment.querySelectorAll(selector).forEach(element => {
				element.addEventListener(eventName, eventsMap[eventKey]);
			});
		}
	}

	mapRegions(fragment: DocumentFragment): void {
		const regionsMap = this.regionsMap();
		for (let key in regionsMap) {
			const selector = regionsMap[key]
			const el = fragment.querySelector(selector)
			if (el) {
				this.regions[key] = el;
			}
		}
	}

	onRender(): void {}

	render(): void {
		this.parent.innerHTML = '';
		const templateElement = document.createElement('template');
		templateElement.innerHTML = this.template();
		this.bindEvents(templateElement.content);
		this.mapRegions(templateElement.content);

		this.onRender();

		this.parent.append(templateElement.content);
	}
}
