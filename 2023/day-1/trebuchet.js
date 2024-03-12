const fs = require('fs')

function readLinesFromTxt(txtFilePath) {
    const txt = fs.readFileSync(txtFilePath)
    const txtToString = txt.toString()
    return txtToString.split('\n')
}

const inputPath = "./input.txt";
const input = readLinesFromTxt(inputPath);

// GIVEN AN ARR OF STRS:
// -- Find the FIRST and LAST number in STR
// -- FIRST = Tens Digit, LAST = Ones Digit
// ---- "1abc2" -> 12
// Return SUM of 2 Digit Num from each line.

// TEST CASES
// 1abc2 -> 12
// pqr3stu8vwx -> 38
// a1b2c3d4e5f -> 15
// treb7uchet -> 77
// TOTAL -> 142

// PSUEDOCODE
// For each STR:
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
  const nums = [];

  for (let char of str) {
    const num = Number(char);

    if(!isNaN(num)) {
      nums.push(num);
    }
  }

  return (nums[0] * 10) + nums[nums.length - 1];
}

console.log(calibrateTrebuchet(input));