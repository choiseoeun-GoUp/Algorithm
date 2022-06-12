function solution(x) {
  let b = String(x);
  let result = 0;
  for (let i = 0; i < b.length; i++) {
    result += parseInt(b[i]);
  }

  if (x % result === 0) return true;
  else return false;
}

//다른사람 풀이방법
function Harshad(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a));
}
// 도저히 무슨 말인지 모르겠다.....언젠가는 이해할수있기를 하하
