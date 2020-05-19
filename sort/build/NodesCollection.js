"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(data) {
        this.data = data;
        this.next = null;
    }
    return Node;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
    }
    LinkedList.prototype.add = function (data) {
        var node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        var tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    };
    LinkedList.prototype.compare = function (x, y) {
        if (!this.head)
            throw new Error('List empty');
        return this.at(x).data > this.at(y).data;
    };
    LinkedList.prototype.swap = function (x, y) {
        var left = this.at(x);
        var right = this.at(y);
        var leftHand = left.data;
        left.data = right.data;
        right.data = leftHand;
    };
    LinkedList.prototype.at = function (index) {
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        var counter = 0;
        var node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    };
    Object.defineProperty(LinkedList.prototype, "length", {
        get: function () {
            if (!this.head)
                return 0;
            var length = 1;
            var node = this.head;
            while (node.next) {
                length++;
                node = node.next;
            }
            return length;
        },
        enumerable: true,
        configurable: true
    });
    LinkedList.prototype.print = function () {
        if (this.head === null)
            return console.log([]);
        var node = this.head;
        var results = [];
        while (node.next) {
            results.push(node.data);
            node = node.next;
        }
        results.push(node.data);
        console.log(results);
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
