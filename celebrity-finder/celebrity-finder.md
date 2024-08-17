# Celebrity Finder

## Problem Description

At a party, a celebrity is defined as someone who is known by everyone but does not know anyone else. The goal is to identify if there is a celebrity at the party based on the given relationships.

We have a matrix of relationships where each entry represents whether one person knows another. The matrix is represented as follows:

matrix = [
        ['A', 'B', 'T'],  // A knows B
        ['A', 'C', 'T'],  // A knows C
        ['B', 'A', 'F'],  // B does not know A
        ['B', 'C', 'F'],  // B does not know C
        ['C', 'A', 'T'],  // C knows A
        ['C', 'B', 'T'],  // C knows B
    ]

## Approach

The approach to solving the problem involves the following steps:

- Convert Input: Convert 'T' and 'F' to boolean values (true and false) for easier manipulation.
- Extract Unique People: Identify all unique people from the relationships and create an index mapping.
- Candidate Identification: Find a potential celebrity by checking who knows others.
- Verification: Ensure the candidate is known by everyone and does not know anyone else.

## Optimizations

- Compact Representation: The matrix is avoided by working directly with the relationships array, reducing space complexity.
- Efficient Candidate Finding: The candidate is identified with a single pass and updated efficiently.
- Direct Relationship Checks: Verification is done directly from the relationships array, avoiding pre-built matrix checks.
- Space Optimization: Minimized space usage by not explicitly storing a large matrix, keeping the space complexity to O(n).

## JavaScript Code

Below is the JavaScript code that implements the solution:

```js    
    // Input relationships
        const relationships = [
            ['A', 'B', 'T'],
            ['A', 'C', 'T'],
            ['B', 'A', 'F'],
            ['B', 'C', 'F'],
            ['C', 'A', 'T'],
            ['C', 'B', 'T'],
        ];

        // Convert 'T'/'F' to true/false
        const convertToBoolean = (value) => value === 'T';

        // Extract unique people
        const people = Array.from(new Set(relationships.flatMap(rel => [rel[0], rel[1]])));
        const index = Object.fromEntries(people.map((person, idx) => [person, idx]));
        const n = people.length;

        // Step 1: Find the candidate
        let candidate = 0;
        for (let i = 1; i < n; i++) {
            const knowsCandidate = relationships.some(rel => rel[0] === people[candidate] && rel[1] === people[i] && convertToBoolean(rel[2]));
            if (knowsCandidate) {
                candidate = i;
            }
        }

        // Step 2: Verify the candidate
        const isCelebrity = (candidateIndex) => {
            for (let i = 0; i < n; i++) {
                if (i !== candidateIndex) {
                    const knowsCandidate = relationships.some(rel => rel[0] === people[i] && rel[1] === people[candidateIndex] && convertToBoolean(rel[2]));
                    const candidateKnows = relationships.some(rel => rel[0] === people[candidateIndex] && rel[1] === people[i] && convertToBoolean(rel[2]));
                    if (!knowsCandidate || candidateKnows) {
                        return false;
                    }
                }
            }
            return true;
        };

        // Find and verify the celebrity
        const isCelebrityCandidate = isCelebrity(candidate);
        const result = isCelebrityCandidate ? `The celebrity is person ${people[candidate]}` : 'There is no celebrity at the party.';

        // Output the result to the screen
        const resultElement = document.getElementById('result');
        resultElement.textContent = result;
```    
