import { recordSnapshot } from "../../utils/snapshotUtils";
import _ from "lodash";
let snapshots;

export const binarySearch = (nums, searchItem) => {
  snapshots = [];
  recordSnapshot(nums, _.range(nums.length), [], snapshots);
  const sorted = _.sortBy(nums, "y");
  const target = Number(searchItem);
  const result = _binarySearch(sorted, target);
  return { result, snapshots };
};

const _binarySearch = (nums, target) => {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    let current = nums[mid].y;
    recordSnapshot(nums, [mid], _.range(start, end + 1), snapshots);
    if (target === current) {
      recordSnapshot(nums, [], [mid], snapshots);
      return true;
    }
    if (target > current) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
    recordSnapshot(nums, [], _.range(start, end + 1), snapshots);
  }
  recordSnapshot(nums, [], [], snapshots);
  return false;
};
