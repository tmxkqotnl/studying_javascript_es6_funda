/* 
  ES6 class
  결국 prototype로 만들어진다.
  내부적으로는 함수로 처리된다.
  데이터와 이를 조작하는 코드를 하나로 추상화한다.
*/

class Person{
  constructor(name){
    this.name = name;
  }

  showState(){
    console.log('이름 : '+this.name);
  }
  static welcome(){ // 정적 메소드 가능
    console.log('환영합니다.');
  }
}

const Me = new Person('홍길동');
Me.showState();
Person.welcome();