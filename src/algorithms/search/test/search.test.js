import { linearSearch } from "../linearSearch";
import { binarySearch } from "../binarySearch";

const nums = [
  { _id: "a", x: 0, y: 10 },
  { _id: "b", x: 1, y: 5 },
  { _id: "c", x: 2, y: 20 },
  { _id: "d", x: 3, y: 15 },
  { _id: "d", x: 4, y: 0 },
  { _id: "e", x: 5, y: 18 },
  { _id: "f", x: 6, y: 21 },
  { _id: "g", x: 7, y: 136 },
  { _id: "h", x: 8, y: 17 },
  { _id: "i", x: 9, y: -5 },
];

const existing = 15;
const absent = 96;

test("run linear search must be true", () => {
  const { result } = linearSearch(nums, existing);
  expect(result).toStrictEqual(true);
});

test("run linear search must be false", () => {
  const { result } = linearSearch(nums, absent);
  expect(result).toStrictEqual(false);
});

test("run binary search must be true", () => {
  const { result } = binarySearch(nums, existing);
  expect(result).toStrictEqual(true);
});

test("run binary search must be false", () => {
  const { result } = binarySearch(nums, absent);
  expect(result).toStrictEqual(false);
});
