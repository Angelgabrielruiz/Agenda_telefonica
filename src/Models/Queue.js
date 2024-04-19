import { LinkedList } from "./linkedList.js";

export class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    enqueue(element) {
        this.linkedList.push(element);
    }

    dequeue() {
        return this.linkedList.shift();
    }

    isEmpty() {
        return this.linkedList.size === 0;
    }
}
