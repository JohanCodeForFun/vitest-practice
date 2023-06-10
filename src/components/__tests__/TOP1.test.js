import { test, expect } from 'vitest'

// Assignment
// Write tests for the following, and then make the tests pass!
// DONE - A capitalize function that takes a string and returns it with the first character capitalized.
// DONE - A reverseString function that takes a string and returns it reversed.
// DONE - A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.

// sum function
function sum(...nums) {
  return nums.reduce((a, b) =>  a+b, 0);
}
test('sum 1 + 1', () => {
  expect(sum(1, 1)).toEqual(2);
})
test('1 + 2', () => {
  expect(sum(1, 2)).toEqual(3);
})
test('1 + 1 +1', () => {
  expect(sum(1, 1, 1)).toEqual(3);
})


// A capitalize function 
function capitalizeString(string) {
  const capitalizedWord = string.charAt(0).toUpperCase() + string.slice(1)
  return capitalizedWord;
}

test('capitalizeString Adam', () => {
  expect(capitalizeString('Adam')).toEqual('Adam')
})
test('capitalizeString Adam', () => {
  expect(capitalizeString('bob')).toEqual('Bob')
})

// A reverseString function that takes a string and returns it reversed.
function reverseString(string) {
  const reversedString = [...string].reverse().join('')
  return reversedString
}

test('reverse string Hello', () => {
  expect(reverseString('Hello')).toEqual('olleH')
})
test('reverse string World', () => {
  expect(reverseString('World')).toEqual('dlroW')
})
test('reverse string racecar', () => {
  expect(reverseString('racecar')).toEqual('racecar')
})


// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.
function calculator(a, b, operation) {
    if (operation === 'add') {
      return a + b;
    }
    else if (operation === 'sub') {
      return a - b;
    }
    else if (operation === 'multiply') {
      return a * b;
    }
    else if (operation === 'divide') {
      return a / b;
    }
}

test('1 + 2', () => {
  expect(calculator(1,2,'add')).toEqual(3)
})
test('1 - 2', () => {
  expect(calculator(1,2,'sub')).toEqual(-1)
})
test('1 * 2', () => {
  expect(calculator(1,2,'multiply')).toEqual(2)
})
test('1 / 2', () => {
  expect(calculator(1,2,'divide')).toEqual(0.5)
})

// A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works on this website.

test('caesar, "hello" (ROT 13)', () => {
  expect(caesarCihper(string)).toEqual('uryyb')
})
test('caesar, "Testing" (ROT 13)', () => {
  expect(caesarCihper(string)).toEqual('Grfgvat')
})
test('caesar, "JavaScript" (ROT 13)', () => {
  expect(caesarCihper(string)).toEqual('WninFpevcg')
})