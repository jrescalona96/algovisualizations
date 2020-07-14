import { swap } from "../utils/sortUtils";
import { record } from "../utils/chartUtils";

let snapshots = [];

export const mergeSort = (nums) => {
  const data = _divideThenMerge(nums);
  return { data, snapshots };
};

const _divideThenMerge = (nums) => {
  let data = [...nums];
  if (data.length === 1) return data;
  else if (data.length === 2) {
    if (data[0].y > data[1].y) data = swap(data, 0, 1);
    return data;
  } else {
    const mid = data.length / 2;
    const left = _divideThenMerge(data.splice(0, mid));
    const right = _divideThenMerge(data.splice(mid + 1, data.length - 1));
    console.log(left, right);
    data = _merge(left, right);
  }

  return data;
};

const _merge = (l, r) => {
  let left = [...l];
  let right = [...r];
  let data = [];
  let leftItem = left.shift();
  let rightItem = right.shift();
  while (left.length > 0) {
    if (leftItem < rightItem) data.push(leftItem);
    else data.push(rightItem);
    leftItem = left.shift();
    rightItem = right.shift();
  }
  return [...data, ...right];
};
