// 새로 추가된 메서드들을 간단하게나마 알아본다.

const arr = [1,"ABc","",NaN,undefined];

// 순회

console.log('for:');
for(let i=0;i<arr.length;i++){
  console.log(arr[i]);
}

console.log("forEach : ")
arr.forEach(val=>{
  console.log(val);
});

console.log("for-in");
for(let idx in arr){ // key
  console.log(arr[idx]);
}

console.log("for-of");
for(val of arr){ // list or 문자단위 string에도 적합
  console.log(val);
}

/* 
  array에서 for-in 을 사용하면 안되는 이유
  프로토타입에 저장된 상위의 정보도 보여준다.
*/

console.log("not recommended : ");
Array.prototype.customFunction = function(){}; // custom function, not recommended
for(let idx in arr){ 
  console.log(arr[idx]); // func(){} 가 하나 더 추가된다.
}

// 복사

/* 
  전개구문, spread operator
  반복 가능한 객체 (Iterable Object)를 개별 요소로 분리할 수 있다.
*/

const original = ["abcd","efg",100];
const copy = [...original]; // 배열 전개
const copy2 = [1,2,...original,4,5];

console.log("copy : ");
console.log(copy);
console.log(original === copy); // false
console.log(copy2);

// 활용

function sum_(a,b,c){
  console.log(a+b+c); 
}

const numbers = [1,2,3,4];
console.log("sum : ");
sum_.apply(null,numbers); // old way
sum_(...numbers); // new way


// from 메서드

// 가짜 배열(배열 같은 형태를 띄지만 배열이 아닌)을 배열로 만들어주기
(function(){
  let newArray = Array.from(arguments);
  console.log(newArray);
  console.log(Array.isArray(newArray)); // true
})(1,2,3,4,5,6,7);