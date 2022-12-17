function solution(my_string) {
    var answer = [];
    let arr = my_string.split("").filter((el)=> Number(el) > -1)
    
    return arr.map(Number).sort((a,b)=> a-b);
}