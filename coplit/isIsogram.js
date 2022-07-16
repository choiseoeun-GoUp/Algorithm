function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 중복된 문자열 있으면 flase
  // 일단 문자열을 다 소문자로 변환 toLowerCase()
  // 
//   let arr = str.toLowerCase().split("")
//   const set = new Set(arr);
  
//  if(arr.length !== set.size) return false;
//  else return true;

  const set = new Set(str.toLowerCase().split(""));
  return (str.length !== set.size)? false : true

}
