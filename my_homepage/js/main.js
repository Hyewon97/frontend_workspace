// main.js
///////////////////////////////////////////////
// 슬라이드 기능 구현
//////////////////////////////////////////////

setInterval(function () {
  // 슬라이드 객체값 가져오기
  let tg = document.querySelector(".slide");
  tg.style.top = "-100%";
  tg.style.transition = "0.6s";

  /*
    실행하고 3초가 지나면 아래 코드를 실행하라.
    */
  setTimeout(function () {
    //tg- li에 있는 첫번째
    let first = tg.querySelectorAll("li")[0];

    // 첫번째 걸 가지고 와서 맨 뒤에 붙여줌
    tg.appendChild(first);
    tg.style.top = "0";
    tg.style.transition = "none";
  }, 600); // 0.6초 동안 실행하라.
}, 3000);

/////////////////////////////////////////////////
// 함수명 : popup
// 기능 : 팝업 열기/닫기
////////////////////////////////////////////////
function popup(sts) {
  var pop = document.querySelector(".pop");
  pop.style.display = sts;
}

//////////////////////////////////////////////////////
// 로그인
//////////////////////////////////////////////////////
document.log_f.onsubmit = () => {
  let idNode = document.querySelector("#userName");
  let passNode = document.querySelector("#userPassword");

  if (idNode.value == "") {
    alert("아이디를 입력하세요.");
    return false;
  }
  // elseif 쓰며 안됨. 비교할 대상이 다름.
  if (passNode.value == "") {
    alert("비밀번호를 입력하세요.");
    return false;
  }
  // doucument.log_f.action='#'
  // 강제적으로 submit() 이벤트를 발생시킨다.
  document.log_f.submit();
};
