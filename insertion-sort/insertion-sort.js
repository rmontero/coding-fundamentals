// Define the Pair class
class Pair {
    /**
     * @param {number} key The key to be stored in the pair
     * @param {string} value The value to be stored in the pair
     */
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

// Define the Solution class that uses Pair
class Solution {
    /**
     * @param {Pair[]} pairs
     * @returns {Pair[][]}
     */
    insertionSort(pairs) {
        const states = [this.copyArray(pairs)];

        for (let i = 1; i < pairs.length; i++) {
            const currentPair = pairs[i];
            let j = i - 1;
            
            // Find the correct position for currentPair
            while (j >= 0 && pairs[j].key > currentPair.key) {
                pairs[j + 1] = pairs[j];
                j--;
            }
            pairs[j + 1] = currentPair;

            // Record the state of the array after insertion
            states.push(this.copyArray(pairs));
        }

        return states;
    }

    /**
     * @param {Pair[]} array
     * @returns {Pair[]}
     */
    copyArray(array) {
        return array.map(pair => new Pair(pair.key, pair.value));
    }
}

// Example usage:
const solution = new Solution();
const pairs1 = [new Pair(5, "apple"), new Pair(2, "banana"), new Pair(9, "cherry")];
const pairs2 = [new Pair(3, "cat"), new Pair(3, "bird"), new Pair(2, "dog")];

console.log(solution.insertionSort(pairs1));
console.log(solution.insertionSort(pairs2));
