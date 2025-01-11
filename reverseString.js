export default function reverseString(str) {
  const halfwayIndex = str.length / 2;
  let charArr = str.split('');
  for (let i = 0; i < halfwayIndex; i++) {
    let j = charArr.length - 1 - i;
    let c = charArr[j];
    charArr[j] = charArr[i];
    charArr[i] = c;
  }
  return charArr.join('');
}