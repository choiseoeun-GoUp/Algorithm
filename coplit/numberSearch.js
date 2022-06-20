function numberSearch(str) {
  if(str.length === 0) return 0;
  let num = str.match(/\d/g);
  let allNum = num.reduce((acc,cur)=>Number(acc)+Number(cur));
  let num2 = str.replace(/ /g, "").match(/\D/g);
return Math.round(allNum / num2.length)
}

//정규표현식을 공부하자........
