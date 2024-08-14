class DynamicArray {
    constructor(capacity) {
        this.capacity = capacity;
        this.size = 0;
        this.array = new Array(capacity);
    }

    get(i) {
        if (i >= 0 && i < this.size) {
            return this.array[i];
        }
        throw new Error("Index out of bounds");
    }

    set(i, n) {
        if (i >= 0 && i < this.size) {
            this.array[i] = n;
        } else {
            throw new Error("Index out of bounds");
        }
    }

    pushback(n) {
        if (this.size >= this.capacity) {
            this.resize();
        }
        this.array[this.size] = n;
        this.size++;
    }

    popback() {
        if (this.size === 0) {
            throw new Error("Array is empty");
        }
        const value = this.array[this.size - 1];
        this.size--;
        return value;
    }

    resize() {
        this.capacity *= 2;
        const newArray = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newArray[i] = this.array[i];
        }
        this.array = newArray;
    }

    getSize() {
        return this.size;
    }

    getCapacity() {
        return this.capacity;
    }
}

// Example usage
const dynamicArray = new DynamicArray(1);
console.log(dynamicArray.getSize()); // Output: 0
console.log(dynamicArray.getCapacity()); // Output: 1

dynamicArray.pushback(1);
console.log(dynamicArray.getCapacity()); // Output: 1

dynamicArray.pushback(2);
console.log(dynamicArray.getCapacity()); // Output: 2

console.log(dynamicArray.getSize()); // Output: 2

console.log(dynamicArray.get(1)); // Output: 2

dynamicArray.set(1, 3);
console.log(dynamicArray.get(1)); // Output: 3

console.log(dynamicArray.popback()); // Output: 3
console.log(dynamicArray.getSize()); // Output: 1
console.log(dynamicArray.getCapacity()); // Output: 2