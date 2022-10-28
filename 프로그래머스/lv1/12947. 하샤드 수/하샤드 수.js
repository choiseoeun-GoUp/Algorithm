function solution(x) {
    let b = String(x)
    let result= 0;
    for(let i = 0; i < b.length; i++){
        result += parseInt(b[i])
    }
  
    if(x % result === 0) return true;
    else return false;
    
}