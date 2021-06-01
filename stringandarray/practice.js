// 문자 target을 포함하는 li 요소를 걸러 textContent를 배열로 반환하기

/* 
  toString()은 모든 객체에 사용되어 해당 객체의 클래스를 가져올 수 있다.
  toString.apply()나 toString.call()을 사용해 모든 객체에 적용할 수 있다.
  call은 인자로 목록을, apply는 인수 배열 하나를 받는다. 
*/

let ans = (function (target) {
  const li = document.querySelectorAll("li");
  console.log(toString.call(li)); // object NodeList

  const list = Array.from(li);
  const filteredList = list
    .filter((value) => value.textContent.includes(target))
    .map((v) => v.textContent);

  return filteredList;
})("e");

console.log(ans);
