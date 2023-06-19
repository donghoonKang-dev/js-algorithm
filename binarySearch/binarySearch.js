const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return -1;
};

//Lower Bound는 특정값보다 처음으로 같거나 큰 값이 나오는 위치를 반환
const lowerBound = (arr, target) => {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
};

//Upper Bound 는 특정값보다 처음으로 큰 값이 나오는 위치를 반환
function upperBound(arr, target) {
  let low = 0;
  let high = arr.length;

  while (low < high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] <= target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }

  return low;
}
