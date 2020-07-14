import { mergeSort } from "./mergeSort";

const testData = [
  { _id: "a", x: 0, y: 10 },
  { _id: "b", x: 1, y: 5 },
  { _id: "c", x: 2, y: 20 },
  { _id: "d", x: 3, y: 15 },
  { _id: "e", x: 4, y: 0 },
  { _id: "f", x: 5, y: 100 },
  { _id: "g", x: 6, y: 60 },
];

const sortedTestData = [
  { _id: "e", x: 4, y: 0 },
  { _id: "b", x: 1, y: 5 },
  { _id: "a", x: 0, y: 10 },
  { _id: "d", x: 3, y: 15 },
  { _id: "c", x: 2, y: 20 },
  { _id: "g", x: 6, y: 60 },
  { _id: "f", x: 5, y: 100 },
];

test("run merge sort", () => {
  const { data } = mergeSort(testData);
  expect(data).toStrictEqual(sortedTestData);
});
