// js_043_propagation.js

// 클릭 이벤트를 걸어둠
document.querySelector(".red").onclick = (e) => {
  alert("red");
  e.stopPropagation();
};

document.querySelector(".green").onclick = (e) => {
  alert("green");
  e.stopPropagation();
};

document.querySelector(".blue").onclick = (e) => {
  alert("blue");

  // stopPropagation: 이벤트 전파 되는 것을 차단시켜주는 메소드.
  e.stopPropagation(); // js에서는 return false해도 안됨. jQurey 에서는 됨.
};

document.querySelector("a").onclick = (e) => {
  alert("안녕하세요");
  //   e.preventDefault(); // 페이지 이동을 안하도록
  return false; // e.preventDefault(); 랑 같음
};

/*
[1] Event Progapation(이벤트 전파)
    ① 캡처링(capturing phase) : 부모요소에서 Target요소로 이벤트 전파
    ② 버블링(bubbling pahse) : Target요소에서 부모요소로 이벤트 전파

[2] 이벤트 차단
    stopPropagation()

[3] stopPropagation()와 preventDefault()비교
    stopPropagation() : 이벤트 전파 차단 return false(jQuery)
    preventDefault() : 디폴츠 이벤츠 차단 return false(javascript, jQuery)

    https://www.w3schools.com/jsref/event_preventdefault.asp
    https://developer.mozilla.org/en-US/docs/Web/API/Event/stopPropagation
*/
