import { User } from './models/User'

const user = new User({name: 'Richie', age: 48})

console.log('Hello devTooligan')
console.log(user.get('name'))
console.log(user.get('age'))

user.set({ name: 'joe'})
console.log(user.get('name'))
console.log(user.get('age'))

user.on('change', () => {
    console.log('change #1')
})
user.on('change', () => {
    console.log('change #2')
})

user.on('save', () => {
    console.log('save was triggered')
})

user.trigger('change')
user.trigger('save')
user.trigger('adlkjadlkjadlkjlk')