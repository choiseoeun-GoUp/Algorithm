function solution(n)
{
    var answer = 0;
    var arr = [];
    arr = String(n).split("").map((el)=>{
        return (answer += Number(el))
    })

    return answer;
}
