import { recordSnapshot } from "../../utils/snapshotUtils";
let snapshots;

export const binarySearch = (nums, searchItem) => {
  snapshots = [];
  const target = Number(searchItem.y);
  const result = _binarySearch(nums, target);
  return { result, snapshots };
};

const _binarySearch = (nums, target) => {};
