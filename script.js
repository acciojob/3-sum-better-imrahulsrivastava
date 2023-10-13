function threeSum(arr, target) {
  // Write your code here
  arr.sort((a, b) => a - b);

  let closestSum = Infinity;

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      // If the current sum is equal to the target, return it immediately
      if (sum === target) {
        return sum;
      }

      // Update the closestSum if the current sum is closer to the target
      if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
        closestSum = sum;
      }

      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
