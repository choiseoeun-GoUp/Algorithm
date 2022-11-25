function solution(n) {
    var answer = 0;
    n.toString().split("").map((el)=>(answer += Number(el)))
    return answer;
}