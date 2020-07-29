import { selectionSort } from "./sort/selectionSort";
import { insertionSort } from "./sort/insertionSort";
import { mergeSort } from "./sort/mergeSort";
import { quickSort } from "./sort/quickSort";
import { bubbleSort } from "./sort/bubbleSort";

export const sort = [
  {
    _id: "bubble_sort",
    name: "Bubble Sort",
    algorithm: bubbleSort,
  },
  {
    _id: "selection_sort",
    name: "Selection Sort",
    algorithm: selectionSort,
  },
  {
    _id: "insertion_sort",
    name: "Insertion Sort",
    algorithm: insertionSort,
  },
  {
    _id: "merge_sort",
    name: "Merge Sort",
    algorithm: mergeSort,
  },
  { _id: "quick_sort", name: "Quick Sort", algorithm: quickSort },
];

export const search = [
  {
    _id: "linear_search",
    name: "Linear Search",
    algorithm: bubbleSort,
  },
  {
    _id: "binary_search",
    name: "Binary Search",
    algorithm: bubbleSort,
  },
];
