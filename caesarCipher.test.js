import caesarCipher from './caesarCipher.js';

test('enciphers simple lowercase word', () => {
  expect(caesarCipher('mouse', 2)).toBe('oqwug');
});

test('loops to beginning of alphabet', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('preserves case', () => {
  expect(caesarCipher('McKathlin', 4)).toBe('QgOexlpmr');
});

test('preserves spaces and punctuation', () => {
  expect(caesarCipher('Calm down, son.', 8)).toBe('Kitu lwev, awv.');
});

test('handles negative shifts', () => {
  expect(caesarCipher('giraffe', -1)).toBe('fhqzeed');
});

test('does not change anything when shift is zero', () => {
  let str = "Look at this photograph";
  expect(caesarCipher(str, 0)).toBe(str);
});

test('Cycles cipher shifts greater than 26', () => {
  expect(caesarCipher('Foo Bar', 28)).toBe(caesarCipher('Foo Bar', 2));
});
