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

test('divides integers', () => {
  expect(calculator.divide(9, 3)).toBe(3);
  expect(calculator.divide(100, 4)).toBe(25);
  expect(calculator.divide(42, -2)).toBe(-21);
});

test('divides floating point numbers', () => {
  expect(calculator.divide(100, 3)).toBeCloseTo(33.333333, 5);
  expect(calculator.divide(2.2, 2)).toBeCloseTo(1.1);
  expect(calculator.divide(20, 0.8)).toBeCloseTo(25);
});

test('divides zero by finite nonzero numbers and gets zero', () => {
  expect(calculator.divide(0, 30)).toBe(0);
  expect(calculator.divide(0, 0.4)).toBe(0);
  expect(calculator.divide(0, -2)).toBe(0);
});

test('gets infinite result when dividing by zero', () => {
  expect(Number.isFinite(calculator.divide(28, 0))).toBe(false);
  expect(Number.isFinite(calculator.divide(-0.3, 0))).toBe(false);
  expect(Number.isFinite(calculator.divide(0, 0))).toBe(false);
});

// Multiply tests

test('multiplies positive integers', () => {
  expect(calculator.multiply(1, 31)).toBe(31);
  expect(calculator.multiply(3, 6)).toBe(18);
  expect(calculator.multiply(3243, 1000)).toBe(3243000);
  expect(calculator.multiply(7, 111)).toBe(777);
});

test('multiplies negative integers', () => {
  expect(calculator.multiply(-1, 3)).toBe(-3);
  expect(calculator.multiply(50, -20)).toBe(-1000);
  expect(calculator.multiply(-3, -6)).toBe(18);
});

test('multiplies by zero and gets zero', () => {
  expect(calculator.multiply(0, 0)).toBe(0);
  expect(calculator.multiply(3243, 0)).toBe(0);
  expect(calculator.multiply(0, -1)).toBe(0);
  expect(calculator.multiply(0, 8.8)).toBe(0);
});

test('multiplies floating point numbers', () => {
  expect(calculator.multiply(0.4, 0.5)).toBeCloseTo(0.2);
  expect(calculator.multiply(3.5, 100)).toBeCloseTo(350);
  expect(calculator.multiply(3.3333333, 3)).toBeCloseTo(10);
  expect(calculator.multiply(20, -0.75)).toBeCloseTo(-15);
  expect(calculator.multiply(-2.345, -1)).toBeCloseTo(2.345);
});
