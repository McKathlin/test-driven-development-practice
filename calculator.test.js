import * as calculator from './calculator.js';

// Add tests

test('adds non-negative integers', () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(12, 2)).toBe(14);
  expect(calculator.add(0, 1000)).toBe(1000);
});

test('adds negative integers', () => {
  expect(calculator.add(2, -3)).toBe(-1);
  expect(calculator.add(12, -2)).toBe(10);
  expect(calculator.add(-20, 20)).toBe(0);
  expect(calculator.add(-1, 55)).toBe(54);
  expect(calculator.add(-1, -1)).toBe(-2);
});

test('adds floating point numbers', () => {
  expect(calculator.add(2.1, 3.2)).toBeCloseTo(5.3);
  expect(calculator.add(2.5, -3.5)).toBeCloseTo(-1);
  expect(calculator.add(0.25, 0.75)).toBeCloseTo(1);
  expect(calculator.add(20, 4.1)).toBeCloseTo(24.1);
});

// Subtract tests

test('subtracts whole numbers', () => {
  expect(calculator.subtract(1, 1)).toBe(0);
  expect(calculator.subtract(3, 1)).toBe(2);
  expect(calculator.subtract(12, 2)).toBe(10);
  expect(calculator.subtract(1000, 0)).toBe(1000);
});

test('subtracts larger integer from smaller and returns negative', () => {
  expect(calculator.subtract(1, 2)).toBe(-1);
  expect(calculator.subtract(3, 10)).toBe(-7);
  expect(calculator.subtract(12, 22)).toBe(-10);
  expect(calculator.subtract(0, 1000)).toBe(-1000);
});

test('subtracts negative integers', () => {
  expect(calculator.subtract(1, -2)).toBe(3);
  expect(calculator.subtract(-3, 9)).toBe(-12);
  expect(calculator.subtract(-1, -7)).toBe(6);
  expect(calculator.subtract(0, -100)).toBe(100);
});

test('subtracts floating point numbers', () => {
  expect(calculator.subtract(2.1, 3.2)).toBeCloseTo(-1.1);
  expect(calculator.subtract(2.5, -3.5)).toBeCloseTo(6);
  expect(calculator.subtract(-0.25, 0.75)).toBeCloseTo(-1);
  expect(calculator.subtract(20, 4.1)).toBeCloseTo(15.9);
});

// Divide tests



// Multiply tests