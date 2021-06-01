/* 
  일반적으로 생각하는 집합과 같다.
  중복된 값을 허용하지 않는다. 
  정확히는 무시한다. 
*/
console.log('SET : ');
const mySet = new Set();

mySet.add(1);
mySet.add("2");
mySet.add("ABC");
mySet.add(null);
mySet.add("ABC");

console.log(mySet);
console.log(mySet.has(2),mySet.has("2"));
mySet.forEach(v=>console.log(v));

/* 
  WeakSet - 객체 만의 컬렉션
  집합 내의 객체들은 반드시 참조 대상이 존재해야 한다.
  즉, String, number, null 등은 컬렉션의 원소가 될 수 없다.
  참고로, 열거 불가능(not iterable)하다.
  객체 중복 검사용???
*/
console.log('WEAK SET : ');

const myWeakSet = new WeakSet();
let list1 = [1,2,3,4];
let list2 = [1,2,3,4,5];

myWeakSet.add(list1);
myWeakSet.add(list2);

console.log(myWeakSet);

list1 = null;
console.log(myWeakSet); // 마치 list1이 있는 것처럼 보이지만 그렇지 않다
console.log(myWeakSet.has(list1)); // false
console.log(myWeakSet.has([1,2,3,4])); // false


