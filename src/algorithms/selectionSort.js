import { swap } from "../utils/sortUtils";
import { record } from "../utils/chartUtils";

export const selectionSort = (nums) => {
  return nums.length < 100
    ? _selectionSortSmall(nums)
    : _selectionSortLarge(nums);
};

const _selectionSortSmall = (nums) => {
  let snapshots = [];
  let data = [...nums];
  let start = 0;
  let end = nums.length - 1;
  let minIdx = 0;

  while (start <= end) {
    minIdx = start;
    for (let i = start; i <= end; i++) {
      snapshots = record(
        data,
        [data[minIdx]._id, data[i]._id, data[start]._id],
        snapshots
      );
      if (data[i].y < data[minIdx].y) minIdx = i;
    }
    data = swap(data, start, minIdx);
    start++;
  }

  return { data, snapshots };
};

const _selectionSortLarge = (nums) => {
  let snapshots = [];
  let data = [...nums];
  let start = 0;
  let end = nums.length - 1;
  let minIdx = 0;

  while (start <= end) {
    minIdx = start;

    for (let i = start; i <= end; i++) {
      if (data[i].y < data[minIdx].y) {
        minIdx = i;
        snapshots = record(data, [data[start]._id, data[i]._id], snapshots);
      }
    }
    data = swap(data, start, minIdx);
    start++;
  }

  return { data, snapshots };
};
