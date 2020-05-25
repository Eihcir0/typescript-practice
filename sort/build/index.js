"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NodesCollection_1 = require("./NodesCollection");
//valid type guards:
// typeof myVariable === 'string' | 'number' | 'boolean' | 'symbol'
// else for object use instanceof Array
// const values = new LettersCollection('Richie')
var arr = [3, 211, -100, 99.54321];
var ll = new NodesCollection_1.LinkedList();
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var el = arr_1[_i];
    ll.add(el);
}
ll.sort();
ll.print();
// const values = new NumbersCollection(arr)
// values.sort();
// console.log(values);
