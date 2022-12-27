// js_040_today_.js

// 오늘의 날짜를 가져와서 출력이 되도록
let dataBtnNode = document.querySelector("button");

dataBtnNode.onclick = () => {
  let pNode = document.querySelector("p");

  // 날짜는 무조건 new로 객체생성을 한다.
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  pNode.innerText = `${year}-${month}-${date} ${hour}:${minute}:${second}`;
};

// // new를 안해도 객체를 생성할 수 있다.
// let arr=[1,2,3];
// let obj={'a' :1,'b':2}
