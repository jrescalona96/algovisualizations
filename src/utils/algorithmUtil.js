import { mapChartData } from "../utils/chartUtils";

export const runAlgorithm = (algorithm, nums) => {
  const { snapshots } = algorithm(nums);
  return mapChartData(snapshots);
};
