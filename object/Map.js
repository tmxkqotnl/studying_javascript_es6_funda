/*
  key-value pair 을 저장하고 순서 또한 기억하는 컬렉션
  삽입 순서대로 순회한다.
*/

const myMap = new Map();

myMap.set('1',"1번");
myMap.set('2',"2번");
myMap.set('3',"3번");
myMap.set('1',"0번"); // 키 중복, 덮어쓴다.

console.log(myMap);
console.log(myMap.get('1')); // 0번
for(let pair of myMap){ // 키-값 쌍을 반환한다.
  console.log("key : "+pair[0],"value : "+pair[1]);
}

/*  
  WeakSet 
  weakmap와 마찬가지로 키는 오직 object만 가능하고 참조 대상이 존재해야만 한다.
  열거 불가능하다.
  키에 대한 값을 설정할 수 있다. 
*/

const myWeakMap = new WeakMap();
const myFunc = function(){}; 
myWeakMap.set(myFunc,0);
myWeakMap.set([1,2,3,4],'2');

console.log(myWeakMap);

// 함수 호출 횟수를 저장한다.
for(let i=0;i<5;i++){
  myWeakMap.set(myFunc,myWeakMap.get(myFunc)+1);
}
console.log(myWeakMap.get(myFunc));

/* 
  weakmap을 이용한 private 인스턴스 만들기
  prototype 객체 생성 방식으로 간단하게만.. 
*/

const wm = new WeakMap();

function Area(h,w){
  wm.set(this,{h,w});
}
Area.prototype.getArea = function(){
  const {h,w} = wm.get(this);
  return h*w;
}

const square = new Area(10,20);
console.log(square.getArea());


