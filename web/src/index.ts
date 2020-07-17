import { User } from './models/User'

const user = new User({id: 1})

user.on('change', () => {console.log(user)})

user.fetch()

user.on('save', () => {console.log(user)})
user.attributes.set({ name: 'ronald'})
user.save()