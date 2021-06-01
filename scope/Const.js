/*  
  const 선언자 
  할당된 객체 참조를 변하지 않게 하기 위해(재할당을 방지하기 위해) 사용한다.
  단, 참조하는 객체 내부의 인스턴스는 변할 수 있다. 
*/

const list = [1,2,3,4]; // Array prototype
list.push(1);
console.log(list); // 1,2,3,4,1

/* 
  immutable array, 불변 배열
  불변이라기 보다는 기존의 배열을 그대로 두고 복사하는 방법을 채택한다.
 */

list2 = [].concat(list,[4,5]);
console.log(list2); // 1,2,3,4,1,4,5


const constant = "ABCD"; // String prototype
constant = "123"; // ERROR! Assignment to constant variable