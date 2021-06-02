const tempData = [
  {
    name: "coffee",
    order: true,
    items: ["americano", "milk"],
  },
  {
    name: "company_star",
    order: false,
  },
];

/* 
  Tagged template literals
  tags에는 템플릿의 string이 들어간다.
  나머지는 순서대로 인자에 들어간다.
*/

const templateFunc = (tags, name, items) => {
  console.log(tags);
  console.log(name);
  console.log(items);

  if(typeof items === "undefined"){
    items = '<span style="color:red">주문 가능한 상품이 없습니다</span>';
  }

  return tags[0] + name + tags[1] + items + tags[2];
};

/* 
Tagged Template Literals는 
Template Literals를 이용하여 함수의 인자를 파싱하여 넘겨주는 것
*/

tempData.forEach((v) => {
  const div = document.createElement("div");
  div.innerHTML = templateFunc`<div><em>${v.name}</em><h2>아이템</h2>${v.items}</div><hr/>`;

  document.body.appendChild(div);
});
