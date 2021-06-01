// 새로 추가된 메서드들을 간단하게나마 알아본다.

const str = "AB CD EFG HIHK";
const substr = "AB";
const substr2 = " EF";
const substr3 = "HK";

console.log(str.startsWith(substr)); // true
console.log(str.includes(substr2)); // true
console.log(str.endsWith(substr3)); // true

