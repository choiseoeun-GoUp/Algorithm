function solution(n) {
    var answer = [];
    answer = String(n).split("").map(Number)
    answer.reverse()
    return answer;
}