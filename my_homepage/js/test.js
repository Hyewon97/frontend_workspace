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

////////////////////////////
// 탭변경 변경하기
///////////////////////////
function chgTab(i1, i2) {
  // 탭메뉴                             2개씩 가져오기,배열로
  let tm = document.querySelectorAll(".tm>li");

  // 탭내용
  let tc = document.querySelectorAll(".tc>li");

  // 클래스 추가
  // 0은 공지사항, 인덱스 1은 갤러리가 넘어온다
  // 0 1 : 공지사항이 추가, 1 0 : 갤러리 추가
  tm[i1].classList.add("on"); // 클래스 리스트 추가
  tc[i1].classList.add("on");

  // 클래스 제거
  tm[i2].classList.remove("on");
  tc[i2].classList.remove("on");
}
/////////////////////////////////////////////////
// 함수명 : popup
// 기능 : 팝업 열기/닫기
////////////////////////////////////////////////
function popup(sts) {
  var pop = document.querySelector(".pop");
  pop.style.display = sts;
}
