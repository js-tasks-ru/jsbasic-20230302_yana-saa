function getMinMax(str) {
  let obj = {};
  let arr = str.split(' ');
  let sortedArr = [];
  for (let i = 0; i < arr.length; i++) {
    arr[i] = +arr[i];
    if (arr[i]) {
      sortedArr.push(arr[i])
    }
  }
  console.log(sortedArr)
  obj.min = Math.min.apply(null, sortedArr);
  obj.max = Math.max.apply(null, sortedArr);;
  return obj;
}
