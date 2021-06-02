/* 
  프로토타입의 객체로 추가한다.
  create이나 assign을 사용하지 않고도
  내부 프로토타입 프로퍼티를 객체로 설정할 수 있다.
*/

const itemObj = {
  isAvailable(){
    return this.items.length !== 0;
  },
  showItems(){
    if(!this.isAvailable()) return;
    console.log(this.items);
  },
  addItems(newItem){
    if(!this.isAvailable()) return;
    this.items.push(newItem);  
  },
  makeBasket(){
    if(this.isAvailable()) return;
    this.items = [];
  }
}

const defualtItems = {
  items:["mouse","computer"],
}

// 객체 간의 프로토타입 설정
Object.setPrototypeOf(defualtItems,itemObj)
console.log(defualtItems); 
defualtItems.showItems();

// 포로토타입 체인
const myItems = Object.setPrototypeOf({
  data:new Date(),
}, defualtItems);

console.log(myItems);
