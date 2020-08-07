import { bubbleSort } from "../bubbleSort";
import { insertionSort } from "../insertionSort";
import { mergeSort } from "../mergeSort";
import { quickSort } from "../quickSort";
import { selectionSort } from "../selectionSort";

const workingData = [
  { _id: "a", x: 0, y: 10 },
  { _id: "b", x: 1, y: 5 },
  { _id: "c", x: 2, y: 20 },
  { _id: "d", x: 3, y: 15 },
  { _id: "d", x: 4, y: 0 },
];

const sortedWorkingData = [
  { _id: "d", x: 4, y: 0 },
  { _id: "b", x: 1, y: 5 },
  { _id: "a", x: 0, y: 10 },
  { _id: "d", x: 3, y: 15 },
  { _id: "c", x: 2, y: 20 },
];

test("run bubble sort", () => {
  const { data } = bubbleSort({ workingData });
  expect(data).toStrictEqual(sortedWorkingData);
});

test("testing insertionSort", () => {
  const { data } = insertionSort({ workingData });
  expect(data).toStrictEqual(sortedWorkingData);
});

test("run merge sort", () => {
  const { data } = mergeSort({ workingData });
  expect(data).toStrictEqual(sortedWorkingData);
});

test("run selection sort", () => {
  const { data } = selectionSort({ workingData });
  expect(data).toStrictEqual(sortedWorkingData);
});

test("run quick sort", () => {
  const { data } = quickSort({ workingData });
  expect(data).toStrictEqual(sortedWorkingData);
});
