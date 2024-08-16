class Node {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) {
            return -1;
        }

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }
        return current.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        const newNode = new Node(val);
        if (this.size === 0) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index < 0 || index >= this.size) {
            return false;
        }

        if (index === 0) {
            this.head = this.head.next;
            if (this.size === 1) {
                this.tail = null;
            }
        } else {
            let current = this.head;
            for (let i = 0; i < index - 1; i++) {
                current = current.next;
            }
            current.next = current.next.next;
            if (index === this.size - 1) {
                this.tail = current;
            }
        }
        this.size--;
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.val);
            current = current.next;
        }
        return values;
    }
}

// Example usage:
const linkedList = new LinkedList();
console.log(linkedList.insertHead(1)); // Output: null
console.log(linkedList.insertTail(2)); // Output: null
console.log(linkedList.insertHead(0)); // Output: null
console.log(linkedList.remove(1)); // Output: true
console.log(linkedList.getValues()); // Output: [0, 2]

console.log(linkedList.insertHead(1)); // Output: null
console.log(linkedList.insertHead(2)); // Output: null
console.log(linkedList.get(5)); // Output: -1
