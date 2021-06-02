const myObj = {
  name : "홍길동",
  age : "32",
  _changedValue:0, // 내부용임을 알리는 convention
}

/*
  proxy를 조작하면 target(여기선 myObj)의 프로퍼티에 접근한다.
*/

const proxy = new Proxy(myObj,{
  get(){
    console.log("값을 반환합니다.");
  },
  set(){
    console.log("값을 수정합니다.");
  }
});

let temp = proxy.name; // getter 함수가 자동으로 호출된다.
proxy.name = "다른이름"; // setter 함수가 자동으로 호출된다.

/* 
  proxy의 메서드는 자바스크립트에서 정한 일부 규칙을 지켜야한다!
  reflect는 JavaScript 명령을 가로챌 수 있는 메서드를 제공하는 내장 객체
  reflect를 쓰는 이유는 타겟 객체를 탐색하고
  프로토타입에 대한 사이드 이펙트를 처리하기 위해 사용했다.
  또한, 정확하게 에러를 발생시키고 외부에서도 사용할 수 있다.
*/

const anotherProxy = new Proxy(myObj,{
  get(target,prop,receiver){ // receiver는 this(proxy)
    if(prop.startsWith('_')) throw new Error('access denied');
    console.log("get");
    
    return Reflect.has(target,prop) ? Reflect.get(...arguments) : null;
  },
  set(target,prop,val,receiver){ // 반드시 성공 - true, 실패 - false 
    if(prop.startsWith('_')) throw new Error('access denied');
    if(typeof prop !== "string"){
      return false;
    }
    console.log("set");

    target['changedValue']++;
    return Reflect.set(...arguments);
  },
  deleteProperty(target,prop){ // 반드시 성공 - true, 실패 - false
    if(prop.startsWith('_')) throw new Error('access denied');
    console.log('deleteProperty');

    return Reflect.has(target,prop) ? Reflect.deleteProperty(target,prop) : false;
  }
});

anotherProxy.name;
anotherProxy.age = "44";
anotherProxy.location = "korea";
console.log(anotherProxy.age,anotherProxy.location); // 44 korea
anotherProxy._changedValue = 1; // error




// reference : https://ko.javascript.info/proxy