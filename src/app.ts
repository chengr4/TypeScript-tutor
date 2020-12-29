// Function
function add(n1: number, n2: number) {
  return n1 + n2;
};

function add2(n1: number, n2: number): number {
  return n1 + n2;
};

// void
function add3(n1: number, n2: number): void {
  console.log(n1 +n2);
};

// with Callback
function addAndHandle(n1: number, n2: number, callback: (num: number) => void) {
  let result =  n1 + n2;
  callback(result);
};

addAndHandle(10, 20, (result) => {
  console.log(result); // 30
});

// Object
// Explicit way to declare
const person_explicit: { // === person:object
  name: string;
  age: number;
} = {
  name: 'Max',
  age: 30
}

// Common way to declare
const person_common = {
  name: 'Max',
  age: 30
}

// Tuple
let role: [number, string] = [2, 'author'];

// Enum
enum Role { ADMIN, READ_ONLY, AUTHOR };
enum Role_IDfer { ADMIN = 5, READ_ONLY = 100, AUTHOR = 201};

// Literal types
function combine(
  n1: number, 
  n2: number,
  resultConversion: 'A' | 'B' // Literal type
) {
  if(resultConversion==='A') console.log( n1 + n2);
  else console.log("resultConversion should be correct");
};

combine(1, 2, 'A'); // 3
combine(1, 2, 'B'); // resultConversion should be correct