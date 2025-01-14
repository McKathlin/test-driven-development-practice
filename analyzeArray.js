export default function analyzeArray(arr) {
  // Empty array edge case
  if (arr.length == 0) {
    return { average: null, max: null, min: null, length: 0 };
  }

  // Start min and max with values that will always be replaced
  let report = {
    average: null,
    min: Infinity,
    max: -Infinity,
    length: arr.length
  };

  // Check all elements
  let sum = 0;
  for (let element of arr) {
    sum += element;
    report.max = Math.max(element, report.max);
    report.min = Math.min(element, report.min);
  }
  report.average = sum / arr.length;
  return report;
}
