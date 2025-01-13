import * as calculator from './calculator.js';

test('adds small non-negative integers', () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.add(2, 3)).toBe(5);
  expect(calculator.add(12, 2)).toBe(14);
  expect(calculator.add(0, 100)).toBe(100);
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

