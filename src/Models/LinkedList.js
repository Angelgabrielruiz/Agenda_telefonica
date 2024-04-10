//linkedList.js
import { Node } from "./Node.js"

export class LinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    push(item) {
        const newNode = new Node(item)
        if (!this.head) {
            this.head = newNode
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = newNode
        }

        this.size++
    }

    shift() {
        if (!this.head) {
            return null
        }
        
        const shiftedItem = this.head.data
        this.head = this.head.next
        this.size--
        return shiftedItem
    }

    size() {
        return this.size
    }
}
