/*
  객체를 prototype으로 두면서 객체를 만듦
  생성자가 없음
  직관적이지 못함 
  가독성이 떨어짐
*/

function Health(name){
  this.name = name;
}
Health.prototype.showName = function(){
  console.log('이름 : '+this.name);
}

const me = new Health('홍길동');
me.showName();