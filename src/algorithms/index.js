import { selectionSort } from "./sort/selectionSort";
import { insertionSort } from "./sort/insertionSort";
import { mergeSort } from "./sort/mergeSort";
import { quickSort } from "./sort/quickSort";
import { bubbleSort } from "./sort/bubbleSort";
import { linearSearch } from "./search/linearSearch";
import { binarySearch } from "./search/binarySearch";

export const sort = [
  {
    _id: "bubble_sort",
    name: "BUBBLE SORT",
    algorithm: bubbleSort,
  },
  {
    _id: "selection_sort",
    name: "SELECTION SORT",
    algorithm: selectionSort,
  },
  {
    _id: "insertion_sort",
    name: "INSERTION SORT",
    algorithm: insertionSort,
  },
  {
    _id: "merge_sort",
    name: "MERGE SORT",
    algorithm: mergeSort,
  },
  { _id: "quick_sort", name: "QUICK SORT", algorithm: quickSort },
];

export const search = [
  {
    _id: "linear_search",
    name: "LINEAR SEARCH",
    algorithm: linearSearch,
  },
  // {
  //   _id: "binary_search",
  //   name: "BINARY SEARCH",
  //   algorithm: binarySearch,
  // },
];
