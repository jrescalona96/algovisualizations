import { record } from "../../utils/chartUtils";
import _ from "lodash";

let snapshots;

export const binarySearch = ({ workingData, searchItem }) => {
  const data = [...workingData];
  snapshots = [];
  record(workingData, _.range(data.length), []);
  const result = _binarySearch(data, searchItem);
  return { result, snapshots };
};

const _binarySearch = (workingData, searchItem) => {
  console.log("binary search for", searchItem, "in", workingData);
};
