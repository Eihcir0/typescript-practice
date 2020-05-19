import { Sorter } from './Sorter';
import { LettersCollection } from './LettersCollection'
// import { NumbersCollection } from './NumbersCollection'
import { LinkedList } from './NodesCollection'
//valid type guards:
// typeof myVariable === 'string' | 'number' | 'boolean' | 'symbol'
// else for object use instanceof Array



// const values = new LettersCollection('Richie')
const arr = [3, 2, 1, 99]
// const values = new NumbersCollection(arr)
const ll = new LinkedList()
for (let el of arr) {
    ll.add(el)
}
const sorter = new Sorter(ll);
sorter.sort();
console.log(ll.print());
