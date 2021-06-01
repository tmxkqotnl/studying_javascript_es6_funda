// 간단한 함수형 객체

function getObject() {
  let name = "NAME";

  const getName = () => {
    return name;
  };
  const setName = function (newName) {
    name = newName;
  };
  const printName = () => {
    console.log(name);
  };

  return { getName, setName, printName };
}

const temp = getObject();
console.log(temp.getName());
temp.setName("KKK");
temp.printName();

// 구조분해할당

const obj = {
  name: "KKK",
  address: "US",
  age: "32",
};
const arr = [
  {
    a: 1,
    b: 2,
  },
  {
    c: 3,
    d: 4,
  },
];

let { name: thisName, age: thisAge } = obj;
let [, obj2] = arr; // 순서
let { c, d: e } = obj2;

console.log(thisName, thisAge);
console.log(obj2, c, e);

const listener = document.querySelector('p').addEventListener("click", function ({ target }) {
  console.log(target.textContent);
});
