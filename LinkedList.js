import Node from "./Node.js";

export default class LinkedList {
    constructor(firstNodeValue = null) {
        this.head = new Node(firstNodeValue);
        this.tail = this.head;
    }
    append(value) {
        const node = new Node(value);
        this.tail.next = node;
        this.tail = node;
    }
    prepend(value) {
        const node = new Node(value);
        node.next = this.head;
        this.head = node;
    }
    size() {
        let current = this.head;
        let size = 0;
        while (current) {
            size += 1;
            current = current.next;
        }
        return size;
    }
    at(index) {
        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current;
    }
    pop() {
        let current = this.head;
        while (current.next !== this.tail) {
            current = current.next;
        }
        current.next = null;
        this.tail = current;
    }
    contains(value) {
        let current = this.head;
        while (current !== null) {
            if (current.value === value) return true;
            current = current.next;
        }
        return false;
    }
    find(value) {
        const ocurrences = [];
        const size = this.size();
        let current = this.head;
        for (let i = 0; i < size; i++) {
            if (current.value === value) ocurrences.push(i);
            current = current.next;
        }
        if (ocurrences.length === 1) return ocurrences[0];
        if (ocurrences.length === 0) return null;

        return ocurrences;
    }
    toString() {
        let current = this.head;
        let string = "";
        while (current) {
            string += `${current.value} -> `;
            current = current.next;
        }
        string += "null";
        return string;
    }
    insertAt(value, index) {
        if (index === 0) {
            this.prepend(value);
        } else if (index === this.size()) {
            this.append(value);
        } else if (index > 0 && index < this.size()) {
            this.at(index - 1).next = new Node(value, this.at(index));
        }
    }
    removeAt(index) {
        if (index === 0) {
            this.head = this.at(1);
        } else if (index === this.size() - 1) {
            this.pop();
        } else if (index > 0 && index < this.size()) {
            this.at(index - 1).next = this.at(index + 1);
        }
    }
    getHead() {
        return this.head;
    }
    getTail() {
        return this.tail;
    }
}
