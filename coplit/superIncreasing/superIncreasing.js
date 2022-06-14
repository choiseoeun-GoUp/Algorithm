function superIncreasing(arr) {
  // 일단 sum을 만들어서 다 더해줌 그거를 다음인덱스랑 비교......?
  let sum = arr[0];
  let result;
  for (let i = 1; i < arr.length; i++) {
    result = true;
    sum += arr[i];
    if (sum >= arr[i + 1]) {
      result = false;
      break;
    }
  }
  return result;
}
