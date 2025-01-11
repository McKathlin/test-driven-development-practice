import capitalize from './capitalize.js';

test('capitalizes first letter of single word', () => {
  expect(capitalize('platypus')).toBe('Platypus');
});