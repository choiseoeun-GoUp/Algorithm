function solution(box, n) {
   // 가로 사이즈에 맞춰 안에 들어갈수있는 최대 갯수저장
    let width = parseInt(box[0] / n)
    // 세로 사이즈에 맞춰 안에 들어갈수있는 최대 갯수저장
    let height = parseInt(box[1] / n)
    // 높이 사이즈에 맞춰 안에 들어갈수있는 최대 갯수저장
    let length = parseInt(box[2] / n)
    
    // 세 변수를 곱한 값을 리턴
    return width * height * length
}