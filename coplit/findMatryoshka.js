function findMatryoshka(matryoshka, size) {
  // TODO: 여기에 코드를 작성합니다.
  if(matryoshka.size === undefined) return false;
  if(matryoshka.size === size) {
    return true;
    }else if(matryoshka.matryoshka !== null){
      return findMatryoshka(matryoshka.matryoshka,size)
    }else{
      return false;
    }
}
