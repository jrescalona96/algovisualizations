import { bubbleSort } from "./bubbleSort";

const testData = [
  { _id: "a", x: 0, y: 10 },
  { _id: "b", x: 1, y: 5 },
  { _id: "c", x: 2, y: 20 },
  { _id: "d", x: 3, y: 15 },
  { _id: "d", x: 4, y: 0 },
];

const sortedTestData = [
  { _id: "d", x: 4, y: 0 },
  { _id: "b", x: 1, y: 5 },
  { _id: "a", x: 0, y: 10 },
  { _id: "d", x: 3, y: 15 },
  { _id: "c", x: 2, y: 20 },
];

test("run bubble sort", () => {
  const { data } = bubbleSort(testData);
  expect(data).toStrictEqual(sortedTestData);
});
