function solution(dot) {
    let [x,y] = dot;
    if(y > 0 && x > 0) return 1;
    if(y > 0 && x < 0) return 2;
    if(y < 0 && x < 0) return 3;
    if(y < 0 && x > 0) return 4;
}