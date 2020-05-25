import { Sorter } from './Sorter';
import { LettersCollection } from './LettersCollection'
import { NumbersCollection } from './NumbersCollection'
import { LinkedList } from './NodesCollection'
//valid type guards:
// typeof myVariable === 'string' | 'number' | 'boolean' | 'symbol'
// else for object use instanceof Array



// const values = new LettersCollection('Richie')
const arr = [3, 211, -100, 99.54321]
const ll = new LinkedList()
for (let el of arr) {
    ll.add(el)
}
ll.sort()
ll.print()
// const values = new NumbersCollection(arr)

// values.sort();
// console.log(values);
