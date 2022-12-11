function solution(array) {
    var answer = [];
    return [Math.max(...array), array.indexOf(Math.max(...array))];
}