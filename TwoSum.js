/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let answer = [];
  let found = false;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      let sum = nums[i] + nums[j];
      if (sum == target) {
        answer.push(i);
        answer.push(j);
        found = true;
        break;
      }
    }
    if (found) break;
  }
  return answer;
};
