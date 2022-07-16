// const isSubsetOf = function (base, sample) {
//   let count =0;
//   for(let i=0; i<base.length; i++){
//       if(sample.indexOf(base[i])!== -1){
//           count++;
//       }
//   }
//   if(count === 0){
//       return false
//   }
//   else return true;
// };
// 이렇게 풀면 이중 for문과 같이 시간복잡도상 복잡해진다. 오늘은 시간복잡도에 맞춰 이중for문이 아닌 식을 사용해야했다. 

// 래퍼런스 코드
const isSubsetOf = function (base, sample) {

  // 1. 일단 정렬
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

	// 3. 함수 실행
  const findItemInSortedArr = (item, arr, from) => {
    for (let i = from; i < arr.length; i++) {
      if (item === arr[i]) return i;
      else if (item < arr[i]) return -1;
    }
    return -1;
  };

	// 2. 함수 호출
  let baseIdx = 0;
  for (let i = 0; i < sample.length; i++) {
    baseIdx = findItemInSortedArr(sample[i], base, baseIdx);
    if (baseIdx === -1) return false;
  }
  return true;
};
// 추가적인 다른 
const isSubsetOf = function (base, sample) {
  if (arguments.length < 2) {
    return false;
  }
  base.sort((a, b) => a - b);
  sample.sort((a, b) => a - b);

  let index = 0;
  let sampleIndex = 0;
  let cnt = 0;
  for (let i = index; i < base.length; i++) {
    if(base[i] === sample[sampleIndex]) {
      sampleIndex++;
      index = i + 1;
      cnt++;
    }

    if(cnt === sample.length) {
      return true;
    }
  }
  return false;
};
