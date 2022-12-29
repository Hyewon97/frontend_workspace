// js043_checked.js

// // 옵션 별 합계를 구하면 된다... 이건 집에서 하는걸루
// let price = document.querySelector("#total.value");
// console.log(price);
// console.log(typeof price);

// 이벤트가 발생 될 때마다 처음에 입력한 값이 default value에 저장이 되고
// 현재 있는 value의 값을 더하면 된다.

let totalCar = document.getElementById("total");

// tbody의 input[type="checkbox"]와 같은걸 저장을 한다.
let chbCnt = document.querySelectorAll('tbody input[type="checkbox"]');
console.log(chbCnt); //NodeList

//NodeList을 Array로 변환
let myChb = [...chbCnt];

// myChb 확인, chbCnt랑 같은 거
// console.log(myChb);

// checkbox에 onclick이벤트가 발생되었을때 수행될 carCount를 등록
myChb.map((element) => {
  //window
  //console.log(this)
  element.onclick = carCount;
});

function carCount() {
  // this는 현재 이벤트가 발생된 checkbox 객체를 나타냄
  // console.log(this);
  // console.log(this.id);

  /* defaultValue는 <input>에 초기에 입력된 value의 값을 기억해 가져온다. */
  let basicCar = Number(totalCar.defaultValue);

  myChb.map((element) => {
    if (element.checked) basicCar += Number(element.value);
  });

  totalCar.value = basicCar;
}
