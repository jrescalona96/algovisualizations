export const swap = (nums, idx1, idx2) => {
  let data = [...nums];
  let temp = data[idx1];
  data[idx1] = data[idx2];
  data[idx2] = temp;
  return data;
};

export default { swap };
