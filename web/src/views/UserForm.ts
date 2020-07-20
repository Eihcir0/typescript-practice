import { User, UserProps } from '../models/User'
import { View } from './View';

export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: (event: Event) => void } {
        return {
            'click:.set-age': this.onSetAgeClick,
            'click:.update-name': this.updateName,
            'click:.save-changes': this.onSaveChanges,
        };
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge()
    }

    updateName = () => {
        const inputEl = this.parent.querySelector('input')
        if (inputEl) {
            const name: string = inputEl.value
            this.model.set({ name })
        }
    }

    onSaveChanges = () => {
        this.model.save()
    }


    template = (): string => {
        return `
            <div>
                <h1>New User Form</h1>
                <div>User name: ${this.model.get('name')}</div>
                <div>User age: <span id="age">${this.model.get('age')}</span></div>
                <input class='name-input'/>
                <button class='set-age'>set random age!!!</button>
                <button class='update-name'>update name!!!</button>
                <br/>
                <button style='margin-top: 1rem' class='save-changes'>Save Changes Homie!!</button>
            </div>
        `;
    }
}