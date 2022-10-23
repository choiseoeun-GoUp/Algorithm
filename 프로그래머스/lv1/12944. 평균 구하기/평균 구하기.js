function solution(arr) {
    var result = 0;
    arr.map((el)=>(result=result+el));
    return result / arr.length;

}