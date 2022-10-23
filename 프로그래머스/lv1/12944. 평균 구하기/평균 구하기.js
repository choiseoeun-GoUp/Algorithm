function solution(arr) {
    var answer = 0;
    var all=0;
    arr.map((el)=>(all=all+el));
    answer = all / arr.length;
    return answer;
}