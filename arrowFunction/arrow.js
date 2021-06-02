// 간단한 화살표 함수

const newArr = [1, 2, 3, 4, 5].map((v) => v ** v);
console.log(newArr);

/*
  'this' context of arrow function
*/

const temp = {
  checkThisArrow() {
    setTimeout(() => {
      console.log(this === window); // false
    }, 500);
  },
  checkThisFunc() {
    setTimeout(function () {
      console.log(this === window); // true
    }, 500);
  },
};

temp.checkThisArrow();
temp.checkThisFunc();

// 좀 더 구체적인 예

// example 1
function clickListener() {
  console.log(this); // <p>click me<p>
  this.removeEventListener("click", clickListener);
  this.addEventListener("click", clickListenerArrow);
}
const clickListenerArrow = (e) => {
  console.log(this); // Window object
  console.log(e.target); // <p>click me<p>
};

const tag_p = document.querySelector("p");
tag_p.addEventListener("click", clickListener);


/*
  example 2
  권장하지 않지만, 같은 이벤트에 여러 개의 리스너를 탑재했다.
*/

const div = document.querySelector("div");
const obj = {
  func1() {
    div.addEventListener("click", function(e){
      this.func4(); 
    });
  },
  func2() {
    div.addEventListener("click", function(e){
      this.func4(); 
    }.bind(this));
  },
  func3() {
    div.addEventListener("click", (e) => {
      this.func4(); 
    });
  },
  func4() {
    console.log(div.textContent);
  },
};

obj.func1(); // not a function
obj.func2(); // thisContext
obj.func3(); // thisContext
