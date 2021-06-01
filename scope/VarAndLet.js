/* 
  기존의 var문을 이용한 변수 선언과 그 scope(유효범위)
  var은 함수 스코프에서 유효하다.
 */

(function(){
  
  for(var value = 0;value<100;value++){
    var call_from_outside = value;
  }

  console.log(value); // 100
  console.log(call_from_outside); // 99
})();


// let은 블록단위({...}) 스코프를 제공한다.

(function(){
  for(let value = 0; value <100; value++){
  }
  console.log(value); // ERROR! 'value' is not defined
})();

