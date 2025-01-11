import capitalize from './capitalize.js';

test('capitalizes first letter of single word', () => {
  expect(capitalize('platypus')).toBe('Platypus');
});

test('capitalizes single letter', () => {
  expect(capitalize('f')).toBe('F');
});

test('capitalizes only first word of phrase', () => {
  expect(capitalize('the quick brown fox')).toBe('The quick brown fox');
});

test('leaves already-capital first letter unchanged', () => {
  expect(capitalize('Bob')).toBe('Bob');
});

test('leaves empty string unchanged', () => {
  expect(capitalize('')).toBe('');
});
