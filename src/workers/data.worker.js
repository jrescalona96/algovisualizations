import { generateData } from "../services/testData/data";

addEventListener("message", ({ data: totalCount }) => {
  const data = generateData(totalCount);
  console.log(data);
  postMessage(data);
});
