const arr = [10, 4, 98, 24, 5, 15, 40];

const partition = (arr, low, high) => {
  const pivot = arr[low];
  let pivotIndex = low;
  for (let index = pivotIndex + 1; index < high; ++index) {
    if (arr[index] <= pivot) { // swap
      pivotIndex++;
      [arr[pivotIndex], arr[index]] = [arr[index], arr[pivotIndex]];
    }
  }
  [arr[low], arr[pivotIndex]] = [arr[pivotIndex], arr[low]];
  return pivotIndex;
}

const quick_sort = (arr, low, high) => {
  if (low < high) {
    const q = partition(arr, low, high);
    console.log(q)
    quick_sort(arr, low, q - 1);
    quick_sort(arr, q + 1, high);
  }
}

quick_sort(arr, 0, arr.length);
console.log(arr)