function solution(c) {
    let result = 0;
    if(c < 90) result = 1;
    else if(c === 90) result = 2;
    else if(c < 180) result = 3;
    else if(c === 180) result = 4;
    return result;

}