export const swap = (nums, idx1, idx2) => {
  let temp = nums[idx1];
  nums[idx1] = nums[idx2];
  nums[idx2] = temp;
};

export const record = (data, nodes, snapshots) => {
  const snapshot = [...data];
  const focusNodes = [...nodes];
  const name = `Pass #${snapshots.length}`;
  const record = [
    {
      name,
      snapshot,
      focusNodes,
    },
  ];
  return [...snapshots, ...record];
};

export default { swap, record };
