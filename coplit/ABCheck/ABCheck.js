function ABCheck(str) {
  // 있다면, 그것부터 5개 후의 문자열이 b혹은 a인지 확인 => true
  let a = str.toLowerCase();
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "a" && a[i + 4] === "b") return true;
    else if (a[i] === "b" && a[i + 4] === "a") return true;
  }
  return false;
}
