function solution(array) {
    let answer = {};
    let count = 0;
    for(let i = 0; i < array.length ; i++){
        if (!answer[array[i]]) answer[array[i]] = 1;
        else answer[array[i]]++;
    }
    let maxTime = Object.values(answer)[0];
    let maxNum = Object.keys(answer)[0];
    
    for (let num in answer) {
        if (answer[num] > maxTime) {
            maxTime = answer[num];
            maxNum = num;
        }
    }
    for (let num of Object.values(answer)) {
        if (maxTime === num) count++;
        if (count > 1) return -1
    }
    return Number(maxNum);
}