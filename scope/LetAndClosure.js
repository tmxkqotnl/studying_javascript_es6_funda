const body = document.body;

// const와 closure를 테스트하기 위한 table 출력
(function(){
  const ul = document.createElement('ul');
  for(let i =0;i<4;i++){
    const li = document.createElement('li');
    li.textContent = "list"+i;
    ul.appendChild(li);
  }
  body.appendChild(ul);
})();

/* 
  i는 함수 스코프에서 유효하기 때문에 발생하는 문제
  외부함수의 실행이 끝나서 외부함수가 소멸된 이후에도 내부함수가 외부함수의 변수에 접근 할 수 있다. (closure)
  즉, 이벤트 리스너에 적용되는 i는 모두 같은 i를 참조한다. 
  마지막에는 모두 4로 저장된다.
 */

(function(){
  const list = document.querySelectorAll('li');
  for(var i = 0;i<list.length;i++){
    // function은 콜백함수로 나중에 실행된다.
    list[i].addEventListener('click',function(){
      console.log(i+"번째 리스트입니다.");
    });
  }
})();


/* 
// NotProper의 i를 let으로 선언하면 closure로 인한 문제를 해결할 수 있다.
(function(){
  const list = document.querySelectorAll('li');
  for(let i = 0;i<list.length;i++){
    list[i].addEventListener('click',function(){
      console.log(i+"번째 리스트입니다.");
    });
  }
})(); 
*/