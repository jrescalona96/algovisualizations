export const swap = (nums, idx1, idx2) => {
  let temp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = temp;
  return nums;
};

export default { swap };
