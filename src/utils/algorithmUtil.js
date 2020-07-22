import { mapChartData } from "../utils/chartUtils";

export const runAlgorithm = async (algorithm, nums) => {
  const { snapshots } = algorithm(nums);
  return mapChartData(snapshots);
};
