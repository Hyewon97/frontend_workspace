// js_041_checkbox_.js

// 약관동의. 체크하라고 메세지를 띄워줘야 함
document.frm.onsubmit = () => {
  let admin = document.frm.admin;

  // 체크가 되어있으면 tru, 안되어 있으면 fla.... 선택이 안되어 있을때만 처리한다.
  if (!admin.checked) {
    alert("약관에 동의해야 합니다.");
    return false;
  }
};

// 전체선택
document.frm.allCheck.onclick = function () {
  //   console.log(this.checked);// 익명함수에서 this는 현재 함수를 의미

  // 현재의 checked 값을 넣어줌
  //   document.frm.subject1.checked = this.checked;
  //   document.frm.subject2.checked = this.checked;
  //   document.frm.subject3.checked = this.checked;

  let checkgroup = document.querySelectorAll(".checkgroup");
  // console.log(checkgroup.length);

  // 이벤트 걸기
  // for (let element of checkgroup) {
  //   // console.log(this, typeof this, `${this}`); //  'object' '[object HTMLInputElement]'
  //   // break;
  //   element.checked = this.checked;
  // }

  /////////////////////////////////////////////////////////////////////////////////////
  // 노드 리스트는 배열에서 사용해야함. 타입 에러 발생.
  //ES6 Spread operator : NodeList을 Array로 변경
  let myThis = this;
  // 문제1) map은 배열일 때 사용한다. -> 노드리스트를 배열로 바꿔야한다.
  // 감싸고 있는게 배열.. 배열로 리턴을 한다.
  // let iArray = [...checkgroup];

  // 문제2) 함수 안에서 콜백 함수를 쓴다.
  // iArray.map(function (element) {
  //   // alert(this); // 여기에서 this는 Window

  //   // this는 엘리먼트.
  //   element.checked = myThis.checked;
  // });

  ////////////////////////////////////////////////
  // Array.from() : NodeList을 Array로 변경
  // let myArray = Array.from(checkgroup);

  // [object HTMLInputElement],[object HTMLInputElement],[object HTMLInputElement]
  // console.log(`${myArray}`);

  // myArray.map(function (element) {
  //   element.checked = myThis.checked;
  // });
  ///////////////////////////////////////////////
  // forEach()

  checkgroup.forEach(function (element) {
    // console.log(element);

    // window 안에 저장이 됨.
    // console.log(this);

    // myThis로 바꿈 -> 배열로 바꾸는 과정이 없어도 된다.....
    //this는 현재 발생되고 있는 객체를 의미한다.
    // this를 callback 함수에서 사용하면 이건 window를 나타낸다.

    element.checked = myThis.checked;
  });
}; /////////////////////////////////////////////////////////////
