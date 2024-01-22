// UNIT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly. If you get stuck, please leave comments to help us understand your thought process.

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.
const fibonacci = (length) => {
    if (length <= 2) {
      throw new Error("Input must be greater than 2");
    }
    const sequence = [1, 1];

  for (let i = 2; i < length; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
};

describe("fibonacci", () => {
    it("should throw an error for input less than or equal to 2", () => {
      expect(() => fibonacci(2)).toThrow("Input must be greater than 2");
    });
const fibonacciLength1 = 6
it("should generate Fibonacci sequence of length 6", () => {
    const result = fibonacci(fibonacciLength1);
    expect(result).toEqual([1, 1, 2, 3, 5, 8]);
  });
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
it("should generate Fibonacci sequence of length 10", () => {
    const result = fibonacci(fibonacciLength2);
    expect(result).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.

// Pseudo code:
// Check if the input is valid, got false
// Start Sequence with [1, 1]
// Generates more numbers
// Returns generated sequence of number



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.
const calculateTally = (votes) => {
    return votes.upVotes - votes.downVotes;
};

describe("calculateTally", () => {
const votes1 = { upVotes: 13, downVotes: 2 }
it("should calculate the end tally for votes1", () => {
    const result = calculateTally(votes1);
    expect(result).toEqual(11);
// Expected output: 11
});
const votes2 = { upVotes: 2, downVotes: 33 }
it("should calculate the end tally for votes2", () => {
    const result = calculateTally(votes2);
    expect(result).toEqual(-31);
  });
});

// Expected output: -31

// b) Create the function that makes the test pass.

// Pseudo code:
// created function to get an end tally
// Subtract downVotes from upVotes to get end tally
// Jest test starts recieved 1 failure
// Jest test again everything passed using both expect(result).toEqual(number in here), was able to pass