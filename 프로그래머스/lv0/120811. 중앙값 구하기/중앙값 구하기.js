function solution(array) {
    let a = array.sort(function(a, b)  {
        return a - b;
        });
    if(a.length % 2 === 0 ) return a[a.length/2];
    else return a[Math.ceil(a.length/2)-1];
}