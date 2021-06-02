// object create & assign

const obj = {
  showState : function(){
    console.log('내 이름은 '+this.name);
  }
}

// 기존의 객체 생성

const myObj = Object.create(obj);
myObj.name = '홍길동';
myObj.setName = function(name){this.name = name;}

myObj.setName('철수');
myObj.showState();

// assign을 이용한 객체 인스턴스 선언, assign(target, ...sources)

// 타겟 객체에 sources의 속성을 복사한다.
const anotherObj = Object.assign(Object.create(obj),{
  name:'계이름',
  setName(name){
    this.name = name;
  }
});

anotherObj.showState();

// 조금 더 간단한 생성방법

const otherObjA = Object.assign({},obj,{
  name:'컴퓨터',
  setName(name){
    this.name = name;
  }
});

const otherObjB = Object.assign({},obj,{
  name:'마우스',
  setName(name){
    this.name = name;
  }
});

console.log(otherObjA === otherObjB); // false


// 단순히 객체에 속성 복사

const otherObj = Object.assign(obj,{
  name:'인바디',
  setName(name){
    this.name = name;
  }
});
otherObj.showState();
console.log(obj === otherObj); // true


