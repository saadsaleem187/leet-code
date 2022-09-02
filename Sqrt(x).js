/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  const squareRoot = Math.sqrt(x);
  const answer = Math.trunc(squareRoot);
  return answer;
};
