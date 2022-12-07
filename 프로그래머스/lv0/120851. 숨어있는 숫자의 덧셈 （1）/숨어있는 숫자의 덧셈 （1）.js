function solution(my_string) {
    var answer = 0;
    my_string.split("").filter((el)=>(Number(el) > 0)).map((el)=>(answer += Number(el)));
    return answer;
}