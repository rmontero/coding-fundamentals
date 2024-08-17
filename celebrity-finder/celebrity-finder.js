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

console.log(result);