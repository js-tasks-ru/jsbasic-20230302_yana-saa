function filterRange(arr, a, b) {
  let copiedArr = [];

  for (let i = 0; i < arr.length; i += 1) {

    if (arr[i] >= a && arr[i] <= b) {
      copiedArr.push(arr[i]);
    }
  }

  return copiedArr;
}
