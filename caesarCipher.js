const LETTER_COUNT = 26;

const FIRST_UPPERCASE_CODE = 'A'.charCodeAt(0);
const LAST_UPPERCASE_CODE = 'Z'.charCodeAt(0);

const FIRST_LOWERCASE_CODE = 'a'.charCodeAt(0);
const LAST_LOWERCASE_CODE = 'z'.charCodeAt(0);

export default function caesarCipher(text, shift) {
  let cipherArr = new Array(text.length);
  for (let i = 0; i < text.length; i++) {
    cipherArr[i] = _encipherChar(text[i], shift);
  }
  return cipherArr.join('');
}

function _encipherChar(originalChar, shift) {
  let code = originalChar.charCodeAt(0);
  let codeForA;
  if (code >= FIRST_UPPERCASE_CODE && code <= LAST_UPPERCASE_CODE) {
    // It's uppercase.
    codeForA = FIRST_UPPERCASE_CODE;
  } else if (code >= FIRST_LOWERCASE_CODE && code <= LAST_LOWERCASE_CODE) {
    // It's lowercase.
    codeForA = FIRST_LOWERCASE_CODE;
  } else {
    // It's not a letter. Don't change non-letters.
    return originalChar;
  }

  // If we're here, it's a letter. Shift it.
  const diffWithA = code - codeForA;
  let shiftedDiff = (diffWithA + shift) % LETTER_COUNT;

  // Cycle the shift within the allowed space for letters.
  if (shiftedDiff < 0) {
    shiftedDiff += LETTER_COUNT;
  } else if (shiftedDiff >= LETTER_COUNT) {
    shiftedDiff -= LETTER_COUNT;
  }
  return String.fromCharCode(codeForA + shiftedDiff);
}
