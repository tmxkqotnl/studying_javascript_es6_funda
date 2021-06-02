/* 
  Proxy(target, handler)
  기본적인 동작의 새로운 행동을 정의한다.
  구체적으로, 
  특정 객체를 감싸 객체에 가해지는 작업(읽기, 쓰기)을 중간에서
  가로채는 객체로, proxy 자체에서 가로챈 작업을 처리하거나
  그대로 전달하기도 함
  handler를 trap이라고 함
*/

const myObj = {
  name: "홍길동",
  age: 32,
};

const proxy = new Proxy(myObj, {}); // 작업은 따로 없음
console.log("myObj : ");
for(let i in myObj){
  console.log(myObj[i]);
}
console.log("proxy : ");
for(let i in proxy){
  console.log(proxy[i]);
}

console.log("(proxy === myObj) = "+ (proxy === myObj));

proxy.name = "다른이름";
console.log("proxy 프로퍼티 수정 후 proxy : ");
for(let i in proxy){
  console.log(proxy[i]);
}

console.log("myObj : ");
for(let i in myObj){
  console.log(myObj[i]);
}