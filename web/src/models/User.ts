import { Eventing } from './Eventing'
import { Sync } from './Sync'
import { Attributes } from './Attributes'
import { AxiosResponse } from 'axios'
import { Model } from './model'
export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

const rootUrl: string = 'http://localhost:3000/users'

export class User extends Model<UserProps> {

}
