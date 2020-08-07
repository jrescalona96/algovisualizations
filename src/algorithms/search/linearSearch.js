import { record } from "../../utils/chartUtils";
import _ from "lodash";

let snapshots;
export const linearSearch = ({ workingData, searchItem }) => {
  const data = [...workingData];
  snapshots = [];
  const result = _linearSearch(data, searchItem);
  return { result, snapshots };
};

const _linearSearch = (data, searchItem) => {
  const end = data.length - 1;
  for (let i = 0; i <= end; i++) {
    snapshots = record(data, [], [i], snapshots);
    if (String(searchItem) === String(data[i].y)) {
      snapshots = record(data, [], [i], snapshots);
      return true;
    }
    snapshots = record(data, [i], [], snapshots);
  }
  snapshots = record(data, _.range(data.length), [], snapshots);
  return false;
};
