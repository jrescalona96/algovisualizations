import { bubbleSort } from "../bubbleSort";
import { insertionSort } from "../insertionSort";
import { mergeSort } from "../mergeSort";
import { quickSort } from "../quickSort";
import { selectionSort } from "../selectionSort";

const unsorted = [
  { _id: "a", x: 0, y: 10 },
  { _id: "b", x: 1, y: 5 },
  { _id: "c", x: 2, y: 20 },
  { _id: "d", x: 3, y: 15 },
  { _id: "d", x: 4, y: 0 },
];

const sorted = [
  { _id: "d", x: 4, y: 0 },
  { _id: "b", x: 1, y: 5 },
  { _id: "a", x: 0, y: 10 },
  { _id: "d", x: 3, y: 15 },
  { _id: "c", x: 2, y: 20 },
];

test("run bubble sort", () => {
  const { data } = bubbleSort(unsorted);
  expect(data).toStrictEqual(sorted);
});

test("testing insertionSort", () => {
  const { data } = insertionSort(unsorted);
  expect(data).toStrictEqual(sorted);
});

test("run merge sort", () => {
  const { data } = mergeSort(unsorted);
  expect(data).toStrictEqual(sorted);
});

test("run selection sort", () => {
  const { data } = selectionSort(unsorted);
  expect(data).toStrictEqual(sorted);
});

test("run quick sort", () => {
  const { data } = quickSort(unsorted);
  expect(data).toStrictEqual(sorted);
});
