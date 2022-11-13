function solution(array) {
    let a = array.sort(function(a, b)  {
        return a - b;
        });
    return a[Math.floor(a.length/2)];
}