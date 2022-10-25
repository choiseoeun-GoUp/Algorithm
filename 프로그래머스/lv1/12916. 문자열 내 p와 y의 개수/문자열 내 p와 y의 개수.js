// function solution(s){
    // 문자열 s를 모두 확인
    // p가 있으면 배열 a에 저장
    // y가 있으면 배열 b에 저장
    // a, b 의 길이가 같은지 판별 
//     const a = s.split("").filter((el)=>el === "p")
//     const b = s.split("").filter((el)=>el === "y")
//     if(a.length === b.length) return true;
//     else if(a.length !== b.length) return false;
//     else if(a.length===0 && b.length===0) return true;
// }


function solution(s){

    return [...s.toLowerCase()].reduce((acc, cur) => {
        if(cur ==='p') return acc + 1;
        else if(cur ==='y') return acc - 1;
        return acc;
    }, 0) ? false : true;
}