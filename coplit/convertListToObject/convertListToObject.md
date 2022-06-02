# Q7. convertListToObject

- 문제 : 2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.
- 주의 사항 : 중복되는 키의 경우, 초기의 값을 사용합니다.빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다. `arr[i]`의 길이가 0인 경우, 무시합니다.
- 수도코드 :
  arr[0][0] = 키 | arr[0][1] = 값
  1. arr 객체안에서 키를 비교해서 중복되는 두번째 값 제거
  2. map으로 모든 배열을 돌아서 arr[i] 확인
  3. arr[i]를 한번더 돌아서 arr[j]확인 후 result[arr[i][0]]=arr[i][1]

```jsx
function convertListToObject(arr) {
  let result = {};
  // const newArr = arr.reduce((acc,current)=>{
  //   if(acc[0] === current[0]) acc = current;
  // },[])

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) arr[i] === {};
    // 빈객체일때
    else if (arr[i].length === 2) {
      result[arr[i][0]] = arr[i][1];
    }
  }

  return result;
}
```

⇒ 이문제의 주의사항을 보고 arr 배열안에서 중복되는 첫번째 배열값을 비교후 제거하는 방법에 치중해서 생각을 했다. 도저히 답이 나오지 않아 구글링을 통해 reduce와 findindex를 이용해 배열내 객체의 키값이 중복시 첫번째 키값만 push하는 방법을 찾아내서 적용을 해보려했다. 하지만 막상 적용하려고 보니 findindex를 쓰지않고도 acc[0] === current[0]를 비교하여 같으면 현재값은 이전값이다 라고 해주고싶었는데 저 구문자체가 문법적으로 오류가 있었다… 왜인지 모르겠다. 아직 reduce에 대한 깊은 이해가 부족한것같다. 그래서 이전키의 값이 나오지 못한채 제출하였다.

```jsx
function convertListToObject(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 0 && result[arr[i][0]] === undefined) {
      result[arr[i][0]] = arr[i][1];
    }
  }

  return result;
}
```

⇒ 정답코드이다. 처음에는 result[arr[i][0]] === undefined이 도저히 이해가안갔다. 값자기 undefined?!?! 왜지!?!?!?! 라고 생각했는데 곰곰히 생각하니 애초에 값이 할당되어있었는지를 확인한다는 뜻이었다. 할당된 값이 있다면 중복되는 값이므로 무시하는 조건문을 작성한것이다…..유레카…..댑악…..
