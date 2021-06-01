// 간단한 랜덤번호 6개 생성기

const SETTING = {
  name:"LOTTO",
  count:6,
  number:45,
}

function lotteryMachine({count:cnt,number:num}){
  const numberSet = new Set();
  while(numberSet.size<6){
    numberSet.add(getRandomNumber(num));
  }
  
  return  Array.from(numberSet);
}

function getRandomNumber(num){
  return Math.floor(Math.random()*num);
}

for(let i = 0;i<100;i++) console.log(lotteryMachine(SETTING));
