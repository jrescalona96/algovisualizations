import { linearSearch } from "../linearSearch";
import { binarySearch } from "../binarySearch";

const testData = [
  { _id: "a", x: 0, y: 10 },
  { _id: "b", x: 1, y: 5 },
  { _id: "c", x: 2, y: 20 },
  { _id: "d", x: 3, y: 15 },
  { _id: "d", x: 4, y: 0 },
  { _id: "e", x: 5, y: 18 },
  { _id: "f", x: 6, y: 21 },
  { _id: "g", x: 7, y: 136 },
  { _id: "h", x: 8, y: 17 },
  { _id: "i", x: 9, y: -25 },
];

const existing = 15;
const absent = 96;

const successInput = { workingData: testData, searchItem: existing };
const failInput = { workingData: testData, searchItem: absent };

test("run linear search must be true", () => {
  const { result } = linearSearch(successInput);
  expect(result).toStrictEqual(true);
});

test("run linear search must be false", () => {
  const { result } = linearSearch(failInput);
  expect(result).toStrictEqual(false);
});

// test("run binary search must be true", () => {
//   const { result } = binarySearch(successInput);
//   expect(result).toStrictEqual(true);
// });

// test("run binary search must be false", () => {
//   const { result } = binarySearch(failInput);
//   expect(result).toStrictEqual(true);
// });
