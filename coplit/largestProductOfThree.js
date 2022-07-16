const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  const len = arr.length
  let sortedNum = arr.sort(function(a, b) {
    return b - a;
  });
  let a =  sortedNum[0] * sortedNum[1] * sortedNum[2];//모든 수가 양수 일경우 
  let b = sortedNum[len - 1] * sortedNum[len - 2] * sortedNum[0] // 음수에서 큰수2개와 첫번째수 
  return Math.max(a,b)


};
