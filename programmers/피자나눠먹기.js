function solution(n) {
    var answer = 0;

    if(n%7 == 0) return n/7;
    else  return parseInt(n/7)+1;
}
