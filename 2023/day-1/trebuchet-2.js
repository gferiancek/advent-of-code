const fs = require('fs');

function readLinesFromTxt(txtFilePath) {
  const txt = fs.readFileSync(txtFilePath);
  const txtToString = txt.toString();
  return txtToString.split('\n');
}

const inputPath = "./input.txt";
const input = readLinesFromTxt(inputPath);

// GIVEN AN ARR OF STRS:
// -- Find the FIRST and LAST number in STR
// -- NOTE: Words of nums (one, two) should be counted.
// ---- "one2three" -> 1 & 3
// -- FIRST = Tens Digit, LAST = Ones Digit
// ---- "1abc2" -> 12
// Return SUM of 2 Digit Num from each line.

// TEST CASES
// two1nine -> 29
// eightwothree -> 83
// abcone2threexyz -> 13
// xtwone3four -> 24
// 4nineeightseven2 -> 42
// zoneight234 -> 14
// 7pqrstsixteen -> 76
// TOTAL -> 281

// PSUEDOCODE
// For each STR:
// -- Convert number words to numbers
// ---- NOTE: Edge case of "threeighthree"
// ---- Preserve first/last letter. ("eight" => "e8t");
// -- Check if it is a number, if so, set it aside and in order.
// -- Grab the first number and multiply by 10.
// -- Add result to last number.
// -- Update total with this 2 digit number.
// Repeat for each STR present.
// Return the total.



function calibrateTrebuchet(input) {
  let total = 0;

  for (let line of input) {
    total += getCalibrationValue(line);
  }

  return total;
}

function getCalibrationValue(str) {
  // Possible edge case of "threeighthree". To parse both numbers,
  // Replace numWord with first Letter + num + last letter.
  const numWords = {
    one: 'o1e',
    two: 't2o',
    three: 't3e',
    four: 'f4r',
    five: 'f5e',
    six: 's6x',
    seven: 's7n',
    eight: 'e8t',
    nine: 'n9e',
  }

  let replaced = str;

  for (let [key, value] of Object.entries(numWords)) {
    replaced = replaced.replaceAll(key, value);
  }

  const nums = replaced
    .split('')
    .map((char) => Number(char))
    .filter((num) => !isNaN(num));

  return (nums[0] * 10) + nums[nums.length - 1];
}

console.log(calibrateTrebuchet(input));
