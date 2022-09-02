/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits.reverse();
  let i = 0;
  let carry = true;

  while (carry) {
    if (i < digits.length) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i] += 1;
        carry = false;
      }
    } else {
      digits.push(1);
      carry = false;
    }
    i += 1;
  }

  return digits.reverse();
};
