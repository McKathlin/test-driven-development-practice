export default function caesarCipher(text, shift) {
  let cipherArr = new Array(text.length);
  for (let i = 0; i < text.length; i++) {
    let charCode = text.charCodeAt(i);
    let cipherCode = charCode + shift;
    cipherArr[i] = String.fromCharCode(cipherCode);
  }
  return cipherArr.join('');
}
