"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
// import { NumbersCollection } from './NumbersCollection'
var NodesCollection_1 = require("./NodesCollection");
//valid type guards:
// typeof myVariable === 'string' | 'number' | 'boolean' | 'symbol'
// else for object use instanceof Array
// const values = new LettersCollection('Richie')
var arr = [3, 2, 1, 99];
// const values = new NumbersCollection(arr)
var ll = new NodesCollection_1.LinkedList();
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var el = arr_1[_i];
    ll.add(el);
}
var sorter = new Sorter_1.Sorter(ll);
sorter.sort();
console.log(ll.print());
