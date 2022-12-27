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
  //   console.log(this.checked);

  // 현재의 checked 값을 넣어줌
  //   document.frm.subject1.checked = this.checked;
  //   document.frm.subject2.checked = this.checked;
  //   document.frm.subject3.checked = this.checked;
  let checkgroup = document.querySelectorAll(".checkgroup");
  console.log(checkgroup.length);

  // 이벤트 걸기
  //   for (let element of checkgroup) {
  //     element.checked = this.checked;
  //   }

  // 노드 리스트는 배열에서 사용해야함. 타입 에러 발생.
  //ES6 Spread operator : NodeList을 Array로 변경
  let myThis = this;
  let iArray = [...checkgroup];
  iArray.map(function (element) {
    // alert(this);// 여기에서 this는 Window

    // this는 엘리먼트.
    element.checked = myThis.checked;
  });
};
