import { recordSnapshot } from "../../utils/snapshotUtils";
import _ from "lodash";

let snapshots;
export const linearSearch = (nums, searchItem) => {
  snapshots = [];
  const target = Number(searchItem);
  const result = _linearSearch(nums, target);
  return { result, snapshots };
};

const _linearSearch = (nums, target) => {
  const end = nums.length - 1;
  for (let i = 0; i <= end; i++) {
    recordSnapshot(nums, snapshots, _.range(i), [i]);
    let current = nums[i].y;
    if (target === current) {
      recordSnapshot(nums, snapshots, _.range(i), [i]);
      return true;
    }
    recordSnapshot(nums, snapshots, [..._.range(i), ...[i]], []);
  }
  recordSnapshot(nums, snapshots, _.range(nums.length), []);
  return false;
};
