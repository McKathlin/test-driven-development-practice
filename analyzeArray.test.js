import analyzeArray from './analyzeArray.js';

test('Uses nulls when analyzing empty array', () => {
  const report = analyzeArray([]);
  expect(report).toHaveProperty('average', null);
  expect(report).toHaveProperty('min', null);
  expect(report).toHaveProperty('max', null);
  expect(report).toHaveProperty('length', 0);
});

test('Correctly analyzes single element array', () => {
  const report = analyzeArray([32]);
  expect(report).toHaveProperty('average', 32);
  expect(report).toHaveProperty('min', 32);
  expect(report).toHaveProperty('max', 32);
  expect(report).toHaveProperty('length', 1);
});

test('Analyzes typical array of positive integers', () => {
  const report = analyzeArray([1,8,3,4,2,6]);
  expect(report).toHaveProperty('average', 4);
  expect(report).toHaveProperty('min', 1);
  expect(report).toHaveProperty('max', 8);
  expect(report).toHaveProperty('length', 6);
});

test('Correctly handles negative elements', () => {
  const report = analyzeArray([-1, 7, -450, 0]);
  expect(report.average).toBeCloseTo(-111);
  expect(report).toHaveProperty('min', -450);
  expect(report).toHaveProperty('max', 7);
  expect(report).toHaveProperty('length', 4);
});

test('Correctly handles floating-point elements', () => {
  const report = analyzeArray([4.5, 10, -0.1]);
  expect(report.average).toBeCloseTo(4.8);
  expect(report).toHaveProperty('min', -0.1);
  expect(report).toHaveProperty('max', 10);
  expect(report).toHaveProperty('length', 3);
});
