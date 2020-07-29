import { Attributes } from './Attributes'
import { Eventing } from './Eventing'
import { ApiSync } from './ApiSync'
import { Model } from './Model'
import { Collection } from './Collection'


export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl: string = 'http://localhost:3000/users'

export class User extends Model<UserProps> {
    static buildCollection(): Collection<User, UserProps> {
        return new Collection<User, UserProps>(rootUrl, User.buildUser);
    }
    static buildUser(attrs: UserProps): User {
        return new User(
            new Attributes<UserProps>(attrs),
            new Eventing(),
            new ApiSync<UserProps>(rootUrl),
        )
    }

    setRandomAge(): void {
        const age = Math.round(Math.random() * 100);
        this.set({ age })
    }

    isAdminUser() {
        return this.get('id') === 1;
    }
}

