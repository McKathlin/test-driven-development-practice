import reverseString from './reverseString.js';

test('reverses small odd-length word', () => {
  expect(reverseString('tar')).toBe('rat');
});

test('reverses small even-length word', () => {
  expect(reverseString('best')).toBe('tseb');
});

test('reverses two-letter word', () => {
  expect(reverseString('if')).toBe('fi');
})

test('reverses word with uppercase letter', () => {
  expect(reverseString('Bob')).toBe('boB');
});

test('reverses sentence', () => {
  expect(reverseString('You are a foo.')).toBe('.oof a era uoY');
});

test('has no effect on empty string', () => {
  expect(reverseString('')).toBe('');
});

test('has no effect on single letter string', () => {
  expect(reverseString('A')).toBe('A');
});
